import {ObjectType} from '@nestjs/graphql';
import {RankFlagsInterface, RankScopesInterface} from './rank.interface';

@ObjectType({implements: () => RankScopesInterface})
export class RankScopesModel extends RankScopesInterface {}

@ObjectType({implements: () => RankFlagsInterface})
export class RankFlagsModel extends RankFlagsInterface {}
