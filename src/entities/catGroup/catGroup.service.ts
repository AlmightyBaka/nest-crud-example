import { Injectable } from '@nestjs/common';
import * as faker from 'faker'

import { CatGroup } from './catGroup.types'
import { randomNum } from '../../utils/utils';
import { CatService } from '../cats/cat.service';

@Injectable()
export class CatGroupService {
  getRandomCatGroup(): CatGroup {


    return {
      name: faker.fake('{{commerce.productName}}'),
      location: faker.fake('{{address.streetName}} {{address.streetSuffix}}'),
      size: randomNum(1, 10),
      cats: [new CatService().getRandomCat()]
    }
  }
}
