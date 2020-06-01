import { Injectable, Inject, forwardRef } from '@nestjs/common';
import * as faker from 'faker'
import { v4 as uuid } from 'uuid';

import { Cat, Colour, Pattern } from './cat.entity'
import { randomEnumKey } from '../../utils/utils';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  getRandomCat(): Cat {
    const cat = new Cat()
    
    cat._id = uuid()

    const pattern = Pattern[randomEnumKey(Pattern)]
    cat.pattern = pattern

    // deciding if cat has multiple colours
    if (pattern !== Pattern.SOLID)
      // TODO: add random for 3 colours
      cat.colour = [Colour[randomEnumKey(Colour)], Colour[randomEnumKey(Colour)]]
    else
      cat.colour = Colour[randomEnumKey(Colour)]

    cat.name = faker.fake('{{name.firstName}}')

    return cat
  }

  async getCats(): Promise<Cat[]> {
    return await this.catRepository.find()
  }

  async getCat(name: string): Promise<Cat[]> {
    return await this.catRepository.find({ name })
  }

  async saveRandomCat(): Promise<any> {
    const cat = this.getRandomCat()
    
    await this.catRepository.save(cat)

    return cat
  }
}
