import { Cat } from "src/modules/cats/cat.types";

export type CatGroup = {
    name: string,
    location: string,
    cats: Cat[],
    size: number,
}