import { Controller, Get } from '@nestjs/common';

import { CatService } from './cat.service';
import { Cat } from './cat.types';

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

  @Get('random')
  getRandomCat(): Cat | Error {
    return this.service.getRandomCat();
  }
}
