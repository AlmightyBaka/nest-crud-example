import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';
import { Colour, Pattern } from './cat.types';

@Entity()
export class Cat extends BaseEntity {
  @ObjectIdColumn()
  _id?: string;

  @PrimaryColumn()
  id?: string;
  
  @Column()
  name: string;

  @Column()
  colour: Colour[];

  @Column()
  pattern: Pattern;
}