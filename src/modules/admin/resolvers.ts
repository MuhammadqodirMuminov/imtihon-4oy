import * as Jwt from 'jsonwebtoken';
import { adminEntity } from '../../entity/admin.entity';

export default {
	Query: {
		async login(_: any, body: { email: string; password: string }) {
			const r = await adminEntity.findOne({
				where: { email: body.email, password: body.password },
			});

			if (r == null) return { status: 404, message: 'Email or password wrong.', data: null, token: null };
			const token: string = Jwt.sign({ id: r.id, email: r.email }, 'apple');

			return { status: 200, message: 'success', data: r, token: token };
		},
	},
};
