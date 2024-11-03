import { Module } from '@nestjs/common';
import { GetGroupsRepository } from './get-groups.repository';

@Module({
  providers: [GetGroupsRepository],
  exports: [GetGroupsRepository],
})
export class GetGroupsRepositoryModule {}
