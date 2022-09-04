import {GraphQLJSONObject} from 'graphql-type-json';
import {ArgsType, Field, InputType} from '@nestjs/graphql';

@ArgsType()
export class CommonArgs {
  @Field(() => ExtraArgs, {nullable: true})
  other?: ExtraArgs;
}

@InputType()
export class ExtraArgs {
  @Field({nullable: true})
  skip?: number;

  @Field({nullable: true})
  take?: number;

  @Field(() => GraphQLJSONObject, {nullable: true})
  order?: object;
}
