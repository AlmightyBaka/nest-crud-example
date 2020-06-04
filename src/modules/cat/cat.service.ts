import { Injectable } from '@nestjs/common';
import * as faker from 'faker'
import { v4 as uuid } from 'uuid';

import { Cat } from './cat.entity'
import { randomEnumKey } from '../../utils/utils';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pattern, Colour } from './cat.types';

@Injectable()
export class CatService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  getRandomCat(): Cat {
    const cat = new Cat()

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

  async getCatById(id: string): Promise<Cat> {
    return await this.catRepository.findOne(id)
  }

  async saveRandomCat(): Promise<any> {
    const cat = this.getRandomCat()
    
    await this.catRepository.save(cat)

    return cat
  }

  async deleteCat(id: string): Promise<any> {
    const cat = await this.catRepository.findOne(id)
    return await this.catRepository.delete({ _id: cat._id})
  }

  //TODO
  async createCat(cat: Cat): Promise<any> {
    console.log(cat)
    const newCat = Object.assign(new Cat(), cat)
    return newCat.save()
  }

  // TODO
  async updateCat(id: string, cat: Cat): Promise<any> {
    cat = await this.catRepository.findOne(id)
    return await cat.save
    // return await this.catRepository.update(id, cat)
  }
}
