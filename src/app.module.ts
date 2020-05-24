import { Module } from '@nestjs/common';
import { CatService } from './entities/cats/cat.service';
import { CatController } from './entities/cats/cat.controller';
import { CatGroupController } from './entities/catGroup/catGroup.controller';
// import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    // TODO: GraphQL support
    // GraphQLModule.forRoot({
    //   typeDefs: "./keystore.graphql"
    // }),
  ],
  controllers: [CatController, CatGroupController],
  providers: [CatService, CatGroupController],
})
export class AppModule {}
