import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
// import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './modules/cat/cat.module';
import { CatGroupModule } from './modules/catGroup/catGroup.module'


@Module({
  imports: [
    // TODO: GraphQL support
    // GraphQLModule.forRoot({
    //   typeDefs: "./keystore.graphql"
    // }),
    TypeOrmModule.forRoot(),
    CatsModule,
    CatGroupModule,
  ],
})
export class AppModule {}
