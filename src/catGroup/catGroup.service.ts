import { Injectable } from '@nestjs/common';
import * as faker from 'faker'

import { Cat, Colour, Pattern } from '../app.types'
import { randomEnumKey } from '../utils/utils';

@Injectable()
export class CatGroupService {
  getHello(): string {
    return 'Hello World!';
  }

  getRandomCat(): Cat {
    let colour
    const pattern = Pattern[randomEnumKey(Pattern)]

    // deciding if cat has multiple colours
    if (pattern !== Pattern.SOLID)
      // TODO: add random for 3 colours
      colour = [Colour[randomEnumKey(Colour)], Colour[randomEnumKey(Colour)]]
    else
      colour = Colour[randomEnumKey(Colour)]

    return {
      name: faker.fake('{{name.firstName}}'),
      colour,
      pattern,
    }
  }
}
