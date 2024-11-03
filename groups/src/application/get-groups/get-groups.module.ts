import { Module } from '@nestjs/common';
import { GetGroupsUseCase } from './get-groups.usecase';
import { GetGroupsRepositoryModule } from '../../infrastructure/repository/get-groups/get-groups.repository.module';

@Module({
  imports: [GetGroupsRepositoryModule],
  providers: [GetGroupsUseCase],
  exports: [GetGroupsUseCase],
})
export class GetGroupsModule {}
