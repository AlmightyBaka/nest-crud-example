import { Controller, Get, Param, Delete, Post, Body, Patch } from '@nestjs/common';

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
  async getCatById(@Param('id') id: string): Promise<Cat> {
    return await this.service.getCatById(id);
  }

  @Get('random')
  getRandomCat(): Cat {
    return this.service.getRandomCat();
  }

  @Get('save')
  saveRandomCat(): Promise<Cat> {
    const cat = this.service.saveRandomCat();

    return cat
  }

  @Post()
  createCat(@Body() cat: Cat): Promise<Cat> {
    return this.service.createCat(cat);
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: string,
    @Body() cat: Cat,
  ): Promise<Cat> {
    return this.service.updateCat(id, cat);
  }

  // TODO
  @Delete('/:id')
  deleteCat(@Param('id') id: string): Promise<any> {
    return this.service.deleteCat(id);
  }
}
