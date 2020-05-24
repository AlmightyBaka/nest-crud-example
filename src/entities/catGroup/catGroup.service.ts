import { Injectable } from '@nestjs/common';
import * as faker from 'faker'

import { CatGroup } from './catGroup.types'
import { randomEnumKey } from '../../utils/utils';

@Injectable()
export class CatGroupService {
  getRandomCatGroup(): CatGroup {
    return {
      name: faker.fake('{{name.firstName}}'),
      pattern,
    }
  }
}
