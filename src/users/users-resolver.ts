import { Resolver, Query } from '@nestjs/graphql';
import { User } from './user.entity';

@Resolver(() => User)
export class UsersResolver {
  @Query(() => String)
  getHello(): string {
    return 'hello';
  }
}
