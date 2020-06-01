import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

export enum Colour {
  WHITE = 'White',
  BLACK = 'Black',
  GINGER = 'Ginger',
  GREY = 'Grey',
  CREAM = 'Cream',
  BROWN = 'Brown',
  CINNAMON = 'Cinnamon',
  FAWN = 'Fawn',
}

// type Pattern = 'solid' | 'bi-colour' | 'tabby' | 'tortoiseshell' | 'calico' | 'colour Point'
export enum Pattern {
  SOLID = 'Solid',
  BICOLOUR = 'Bi-colour',
  TABBY = 'Tabby',
  TORTOISESHELL = 'Tortoiseshell',
  CALICO = 'Calico',
  COLOUR_POINT = "Colour point",
}

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