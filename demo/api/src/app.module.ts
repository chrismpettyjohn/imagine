import {resolve} from 'path';
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {imagineDatabaseEntities, ImagineModule} from '@imagine-cms/api';
import {DATABASE_HOST, DATABASE_NAME, DATABASE_PASS, DATABASE_USER, GRAPHQL_PLAYGROUND} from './app.constant';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DATABASE_HOST,
      username: DATABASE_USER,
      password: DATABASE_PASS,
      database: DATABASE_NAME,
      entities: imagineDatabaseEntities,
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: GRAPHQL_PLAYGROUND,
      autoSchemaFile: resolve(__dirname, './schema.gql'),
      fieldResolverEnhancers: ['guards'],
    }),
    ImagineModule,
  ],
})
export class ImagineAPIModule {}
