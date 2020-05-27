Roman Blackz, [27.05.20 15:05]
import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Cat extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  colour: string;

  @Column()
  name: string;

  @Column()
  pattern: string;
}