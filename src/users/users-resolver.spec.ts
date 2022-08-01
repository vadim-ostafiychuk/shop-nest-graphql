import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users-resolver';

describe('UsersResolver', () => {
  let provider: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver],
    }).compile();

    provider = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
