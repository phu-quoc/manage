import { Controller, Get } from '@nestjs/common';
import { GetGroupsUseCase } from '../../application/get-groups/get-groups.usecase';

@Controller('groups')
export class GroupsController {
  constructor(private readonly getGroupUseCase: GetGroupsUseCase) {}

  @Get()
  getGroups() {
    return this.getGroupUseCase.getGroups();
  }
}
