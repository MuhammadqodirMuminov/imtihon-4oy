import 'reflect-metadata';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'orders' })
export class Order extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: 'int' })
	foodId!: number;

	@Column({ type: 'int' })
	count!: number;

	@Column()
	totalPrice: number;

	@Column()
	username!: string;

	@Column()
	userEmail!: string;
}
