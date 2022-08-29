import {resolve} from 'path';
import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {databaseEntities, databaseRepositories} from './database.const';
import {
  IMAGINE_DATABASE_HOST,
  IMAGINE_DATABASE_NAME,
  IMAGINE_DATABASE_PASS,
  IMAGINE_DATABASE_USER,
  IMAGINE_GRAPHQL_PLAYGROUND,
} from '../imagine.constant';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: IMAGINE_DATABASE_HOST,
      username: IMAGINE_DATABASE_USER,
      password: IMAGINE_DATABASE_PASS,
      database: IMAGINE_DATABASE_NAME,
      entities: [...databaseEntities],
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: IMAGINE_GRAPHQL_PLAYGROUND,
      autoSchemaFile: resolve(__dirname, './schema.gql'),
      fieldResolverEnhancers: ['guards'],
      installSubscriptionHandlers: true,
    }),
  ],
  providers: [...databaseRepositories],
  exports: [...databaseRepositories, TypeOrmModule],
})
export class DatabaseModule {}
