import { Cat } from "src/entities/cats/cat.types";

export type CatGroup = {
    name: string,
    location: string,
    cats: Cat[],
    size: number,
}