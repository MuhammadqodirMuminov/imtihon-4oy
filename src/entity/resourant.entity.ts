import {
	BaseEntity,
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Food } from './food.entity';

@Entity('restaurant')
export class Restaurant extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	address: string;

	@OneToMany(() => Food, food => food.restaurant)
	foods: Food[];

	@Column()
	image: string;

	@CreateDateColumn()
	created_at: string;

	@UpdateDateColumn()
	updated_at: string;

	@DeleteDateColumn()
	deleted_at: string;
}
