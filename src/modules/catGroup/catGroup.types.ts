import { Cat } from "../cat/cat.entity";

export type CatGroup = {
    name: string,
    location: string,
    cats: Cat[],
    size: number,
}