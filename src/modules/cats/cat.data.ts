// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
// import { Pattern, Colour } from "./cat.types";
// import { CatGroup } from "../catGroup/catGroup.types";


// @Entity()
// class CatEntity {
//     @PrimaryGeneratedColumn('uuid')
//     id: number;
//     @Column()
//     name: string
//     @Column()
//     colour: Colour
//     @Column()
//     pattern: Pattern
//     @ForeignKey(() => CatGroup)
//     @OneToMany(type => CatGroup[], group => )
//     group: CatGroup[]
// }