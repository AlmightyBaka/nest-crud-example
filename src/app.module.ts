import { Module } from '@nestjs/common';
import { CatController } from './entities/cats/cat.controller';
import { CatGroupController } from './entities/catGroup/catGroup.controller';
import { CatService } from './entities/cats/cat.service';
import { CatGroupService } from './entities/catGroup/catGroup.service';
// import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    // TODO: GraphQL support
    // GraphQLModule.forRoot({
    //   typeDefs: "./keystore.graphql"
    // }),
  ],
  controllers: [CatController, CatGroupController],
  providers: [CatService, CatGroupService],
})
export class AppModule {}
