import {GraphQLJSON} from 'graphql-type-json';
import {ArgsType, Field, InputType} from '@nestjs/graphql';

@ArgsType()
export class CommonArgs {
  @Field(() => ExtraArgs, {nullable: true})
  other?: ExtraArgs;
}

@InputType()
export class ExtraArgs {
  @Field({nullable: true})
  take?: number;

  @Field(() => GraphQLJSON, {nullable: true})
  order?: object;
}
