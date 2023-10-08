import {Module} from '@nestjs/common';
import {registerEnumType} from '@nestjs/graphql';
import {FurnitureResolver} from './furniture.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {FurnitureValueType} from '../database/furniture.entity';
import {FurnitureOrderBy} from './furniture.input';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [FurnitureResolver],
})
export class FurnitureModule {}

registerEnumType(FurnitureValueType, {
  name: 'FurnitureValueType',
});

registerEnumType(FurnitureOrderBy, {
  name: 'FurnitureOrderBy',
});
