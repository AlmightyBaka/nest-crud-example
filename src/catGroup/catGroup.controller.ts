import { Controller, Get } from '@nestjs/common';

import { CatService } from '../cats/cat.service';
import { Cat } from '../app.types';

@Controller({ path: 'api' })
export class CatGroupController {
  constructor(private readonly appService: CatService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get()
  // getCats(): Cat[] {
  //   return this.appService.getCats();
  // }

  @Get('random')
  getRandomCat(): Cat {
    return this.appService.getRandomCat();
  }
}
