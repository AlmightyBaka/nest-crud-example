import { Module } from '@nestjs/common';
import { CatGroupController } from './catGroup.controller';
import { CatGroupService } from './catGroup.service';

@Module({
    controllers: [CatGroupController],
    providers: [CatGroupService],
})
export class CatGroupModule {}
