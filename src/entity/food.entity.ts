import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { Restaurant } from "./resourant.entity"

@Entity("foods")
export class Food extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ type: "decimal" })
  price: number

  @Column()
  image: string

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.foods)
  restaurant: Restaurant

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  @DeleteDateColumn()
  deleted_at: string
}
