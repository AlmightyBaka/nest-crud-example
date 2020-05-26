import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
// import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './entities/cats/cats.module';
import { CatGroupModule } from './entities/catGroup/catGroup.module'


@Module({
  imports: [
    // TODO: GraphQL support
    // GraphQLModule.forRoot({
    //   typeDefs: "./keystore.graphql"
    // }),
    // TODO: move out of code
    TypeOrmModule.forRoot(),
    CatsModule,
    CatGroupModule
  ],
})
export class AppModule {}
