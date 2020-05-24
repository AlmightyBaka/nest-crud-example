import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Cat } from './app.types';

@Controller({ path: 'api' })
export class AppController {
  constructor(private readonly appService: AppService) {}

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
