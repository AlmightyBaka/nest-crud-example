import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CatController } from './entities/cats/cat.controller'
import { CatGroupController } from './entities/catGroup/catGroup.controller'
import { CatService } from './entities/cats/cat.service'
import { CatGroupService } from './entities/catGroup/catGroup.service'
// import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    // TODO: GraphQL support
    // GraphQLModule.forRoot({
    //   typeDefs: "./keystore.graphql"
    // }),
    // TODO: move out of code
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'test',
      entities: [],
      synchronize: true,
    })
  ],
  controllers: [CatController, CatGroupController],
  providers: [CatService, CatGroupService],
})
export class AppModule {}
