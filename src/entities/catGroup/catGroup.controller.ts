import { Controller, Get } from '@nestjs/common';

import { CatGroupService } from './catGroup.service';
import { CatGroup } from './catGroup.types';

@Controller({ path: 'api' })
export class CatGroupController {
  constructor(private readonly appService: CatGroupService) {}

  // @Get()
  // getCats(): Cat[] {
  //   return this.appService.getCats();
  // }

  @Get('random')
  getRandomCatGroup(): CatGroup {
    return this.appService.getRandomCatGroup();
  }
}
