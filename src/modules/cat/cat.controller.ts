import { Controller, Get, Param } from '@nestjs/common';

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

  @Get('/:name')
  async getCat(@Param('name') name: string): Promise<any> {
    return await this.service.getCat(name);
  }

  @Get('random')
  getRandomCat(): Cat | Error {
    return this.service.getRandomCat();
  }

  @Get('save')
  saveRandomCat(): Promise<Cat> {
    console.log()

    const cat = this.service.saveRandomCat();

    return cat
  }
}
