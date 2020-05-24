import { Module } from '@nestjs/common';
import { CatService } from './cats/cat.service';
import { CatController } from './cats/cat.controller';
import { CatGroupController } from './catGroup/catGroup.controller';
// import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   typeDefs: "./keystore.graphql"
    // }),
  ],
  controllers: [CatController, CatGroupController],
  providers: [CatService],
})
export class AppModule {}
