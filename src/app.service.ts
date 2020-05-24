import { Injectable } from '@nestjs/common';
import * as faker from 'faker'

import { Cat, Colour, Pattern } from './app.types'
import { randomEnumKey } from './utils/utils';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getRandomCat(): Cat {
    return {
      name: faker.fake('{{name.firstName}}'),
      colour: Colour[randomEnumKey(Colour)],
      pattern: Pattern[randomEnumKey(Pattern)],
    }
  }
}
