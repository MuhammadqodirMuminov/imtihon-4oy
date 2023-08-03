import { Order } from '../../entity/order.entity';
interface IAddOrer {
	foodId: number;
	count: number;
	totalPrice: number;
	userName: string;
	userEmail: string;
}

export default {
	Query: {
		async orders() {
			const orders = await Order.find();
			return orders;
		},
		async order(_, { id }: { id: number }) {
			const order = await Order.findOne({ where: { id: id } });

			if (order == null) {
				return { status: 400, message: 'data not found' };
			}

			return { status: 200, message: 'Success', data: order };
		},
	},

	Mutation: {
		addOrder: async (_: any, { foodId, count, totalPrice, userName, userEmail }: IAddOrer) => {
			const data = Order.create({ foodId, count, username: userName, userEmail, totalPrice });
			await data.save();

			return { status: 200, message: 'success', data };
		},
	},
};
