import { Food } from '../../entity/food.entity';

interface FoodAddArgs {
	name: string;
	price: number;
	restaurant: any;
	image: string;
}

interface FoodUpdateArgs {
	name: string;
	price: number;
	image: string;
	id: number;
}

export default {
	Query: {
		async foods() {
			return await Food.find();
		},
		async foodById(_: any, { id }: { id: string }) {
			const food = await Food.findOne({ where: { id: +id } });
			if (food == null) {
				return { status: 400, message: 'data not found', data: food };
			}

			return { status: 200, message: 'success', data: food };
		},
	},
	Mutation: {
		async foodAdd(_: any, { name, price, restaurant, image }: FoodAddArgs) {
			try {
				const food = Food.create({ name, price, restaurant, image });
				await Food.save(food);
				return { status: 200, message: 'success', data: food };
			} catch (error) {
				return error;
			}
		},
		async updateFood(_: any, { name, price, image, id }: FoodUpdateArgs) {
			try {
				const food = await Food.findOne({ where: { id: id } });

				if (food == null) {
					return { status: 400, message: 'data not found', data: food };
				}

				food.name = name;
				food.price = price;
				food.image = image;

				await food.save();
				return { status: 200, message: 'success', data: food };
			} catch (error) {
				return error;
			}
		},
		async deleteFood(_: any, { id }: { id: number }) {
			try {
				const food = await Food.delete({ id });

				console.log(food);

				if (food.affected == 0) {
					return { status: 400, message: 'data not found' };
				}

				return { status: 200, message: 'successfully delete' };
			} catch (error) {
				return error;
			}
		},
	},
};
