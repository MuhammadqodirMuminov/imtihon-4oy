import { Restaurant } from '../../entity/resourant.entity';

interface RestaurantAddArgs {
	name: string;
	address: string;
	image: string;
}
interface RestaurantUpdateAddArgs {
	name: string;
	address: string;
	image: string;
	id: number;
}

export default {
	Query: {
		async restaurants() {
			return await Restaurant.find();
		},
		async restaurantById(_: any, { id }: { id: string }) {
			const restaurant = await Restaurant.findOne({ where: { id: +id } });
			if (restaurant == null) {
				return { status: 400, message: 'data not found', data: restaurant };
			}

			return { status: 200, message: 'success', data: restaurant };
		},
	},
	Mutation: {
		async restaurantAdd(_: any, { name, address, image }: RestaurantAddArgs) {
			try {
				const restaurant = Restaurant.create({ name, address, image });
				await restaurant.save();
				return { status: 200, message: 'success', data: restaurant };
			} catch (error) {
				return error;
			}
		},
		async updateRrestaurant(_: any, { name, address, image, id }: RestaurantUpdateAddArgs) {
			try {
				const restaurant = await Restaurant.findOne({ where: { id: id } });

				if (restaurant == null) {
					return { status: 400, message: 'data not found', data: restaurant };
				}

				restaurant.name = name;
				restaurant.address = address;
				restaurant.image = image;

				await restaurant.save();
				return { status: 200, message: 'success', data: restaurant };
			} catch (error) {
				return error;
			}
		},
		async deleteRestaurant(_: any, { id }: { id: number }) {
			try {
				const restaurant = await Restaurant.delete({ id });

				if (restaurant.affected == 0) {
					return { status: 400, message: 'data not found', data: null };
				}

				return { status: 200, message: 'successfully delete' };
			} catch (error) {
				return error;
			}
		},
	},
};
