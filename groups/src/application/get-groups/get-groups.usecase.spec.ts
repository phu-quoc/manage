import { Test, TestingModule } from '@nestjs/testing';
import { GetGroupsUseCase } from './get-groups.usecase';

describe('GetGroupsUseCase', () => {
  let service: GetGroupsUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetGroupsUseCase],
    }).compile();

    service = module.get<GetGroupsUseCase>(GetGroupsUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
