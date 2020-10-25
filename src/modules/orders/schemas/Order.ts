import {
  ObjectID,
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orders')
class Order {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  userId: string;

  @Column()
  acceptedAt: Date;

  @Column()
  canceledAt: Date;

  @Column()
  payment_due: Date;

  @Column()
  paidAt: Date;

  @Column()
  items: Array<{ id: ObjectID; quantity: number; price: number }>;

  @Column()
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Order;
