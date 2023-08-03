import 'reflect-metadata';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'admin' })
export class adminEntity extends BaseEntity {
	[x: string]: any;
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: 'varchar', length: 32 })
	email!: string;

	@Column({ type: 'varchar', length: 64 })
	password!: string;

	@UpdateDateColumn()
	updated_at: string;

	@CreateDateColumn()
	created_at: string;
}
