import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GetGroupsModule } from '../../application/get-groups/get-groups.module';

@Module({
  imports: [GetGroupsModule],
  controllers: [GroupsController],
})
export class GroupsModule {}
