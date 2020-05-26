import { Controller, Get } from '@nestjs/common';

import { CatGroupService } from './catGroup.service';
import { CatGroup } from './catGroup.types';

@Controller({ path: 'api/gang' })
export class CatGroupController {
  constructor(private readonly service: CatGroupService) {}

  // @Get()
  // getCats(): Cat[] {
  //   return this.appService.getCats();
  // }

  @Get('random')
  getRandomCatGroup(): CatGroup {
    return this.service.getRandomCatGroup();
  }
}
