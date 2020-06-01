import { Controller, Get, Param, Delete } from '@nestjs/common';

import { CatService } from './cat.service';
import { Cat } from './cat.entity';

@Controller({ path: 'api/cat' })
export class CatController {
  constructor(private readonly service: CatService) {}

  @Get('hello')
  getHello(): string {
    return this.service.getHello();
  }

  @Get()
  async getCats(): Promise<any> {
    return await this.service.getCats();
  }

  @Get('name/:name')
  async getCatByName(@Param('name') name: string): Promise<Cat[]> {
    return await this.service.getCatByName(name);
  }

  @Get('id/:id')
  async getCatById(@Param('id') id: string): Promise<Cat[]> {
    return await this.service.getCatById(id);
  }

  @Get('random')
  getRandomCat(): Cat | Error {
    return this.service.getRandomCat();
  }

  @Get('save')
  saveRandomCat(): Promise<Cat> {
    const cat = this.service.saveRandomCat();

    return cat
  }

  @Delete('/:id')
  deleteCat(@Param('id') id: string): Promise<void> {
    return this.service.deleteCat(id);
  }
}
