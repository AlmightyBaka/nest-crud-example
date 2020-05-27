import { Cat } from "src/modules/cat/cat.types";

export type CatGroup = {
    name: string,
    location: string,
    cats: Cat[],
    size: number,
}