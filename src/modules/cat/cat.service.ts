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
      cat.colour = [Colour[randomEnumKey(Colour)], Colour[randomEnumKey(Colour)]]
    else
      cat.colour = Colour[randomEnumKey(Colour)]

    cat.name = faker.fake('{{name.firstName}}')

    return cat
  }

  async getCats(): Promise<Cat[]> {
    return await this.catRepository.find()
  }

  async getCatByName(name: string): Promise<Cat[]> {
    return await this.catRepository.find({ name })
  }

  // TODO
  async getCatById(id: string): Promise<Cat[]> {
    return await this.catRepository.find({ id })
  }

  async saveRandomCat(): Promise<any> {
    const cat = this.getRandomCat()
    
    await this.catRepository.save(cat)

    return cat
  }

  async deleteCat(id: string): Promise<any> {
    console.log(id)
    const cat = await this.getCatById(id)
    console.log(cat)
    return await this.catRepository.remove(cat)
  }

  //TODO
  async createCat(cat: Cat): Promise<any> {
    console.log(cat)
     await this.catRepository.save(cat)

    return cat
  }

  // TODO
  async updateCat(id: string, cat: Cat): Promise<any> {
    console.log(id)
    return await this.catRepository.update(id, cat)
  }
}
