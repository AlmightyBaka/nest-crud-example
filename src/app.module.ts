import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MongooseModule } from '@nestjs/mongoose'
// import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './modules/cat/cat.module';
import { CatGroupModule } from './modules/catGroup/catGroup.module'


@Module({
  imports: [
    // TODO: GraphQL support
    // GraphQLModule.forRoot({
    //   typeDefs: "./keystore.graphql"
    // }),
    // TODO: move config out of code
    MongooseModule.forRoot('mongodb://localhost:27017/nest-test'),
    CatsModule,
    CatGroupModule,
  ],
})
export class AppModule {}
