import {resolve} from "path";
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {GraphQLModule} from '@nestjs/graphql';
import {UserModule} from './user/user.module';
import {RankModule} from './rank/rank.module';
import {SessionModule} from './session/session.module';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo'
import {
  IMAGINE_DATABASE_HOST, IMAGINE_DATABASE_NAME,
  IMAGINE_DATABASE_PASS,
  IMAGINE_DATABASE_USER, IMAGINE_GRAPHQL_PLAYGROUND,
  imagineDatabaseEntities
} from './imagine.constant';

@Module({
  imports: [    TypeOrmModule.forRoot({
    type: 'mysql',
    host: IMAGINE_DATABASE_HOST,
    username: IMAGINE_DATABASE_USER,
    password: IMAGINE_DATABASE_PASS,
    database: IMAGINE_DATABASE_NAME,
    entities: imagineDatabaseEntities,
    synchronize: false,
  }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: IMAGINE_GRAPHQL_PLAYGROUND,
      autoSchemaFile: resolve(__dirname, './schema.gql'),
      fieldResolverEnhancers: ['guards'],
    }),
    SessionModule, UserModule, RankModule],
})
export class ImagineModule {}
