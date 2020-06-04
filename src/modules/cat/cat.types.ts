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

export enum Pattern {
    SOLID = 'Solid',
    BICOLOUR = 'Bi-colour',
    TABBY = 'Tabby',
    TORTOISESHELL = 'Tortoiseshell',
    CALICO = 'Calico',
    COLOUR_POINT = "Colour point",
}   

export class CatDto {
    name: string;
    colour: Colour[];
    pattern: Pattern;
}