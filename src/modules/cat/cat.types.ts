import { prop, getModelForClass } from '@typegoose/typegoose';

import { CatGroup } from "src/modules/catGroup/catGroup.types";

// type Colour = 'white' | 'black' | 'Ginger'| 'Grey'| 'Cream'| 'Brown'| 'Cinnamon'| 'Fawn' 
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

export class Cat {
    @prop()
    name: string
    @prop()
    colour: Colour | Colour[]
    @prop()
    pattern: Pattern
    @prop()
    group?: CatGroup
}
