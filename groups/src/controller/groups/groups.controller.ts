import { Controller, Get } from '@nestjs/common';
import { GetGroupsUseCase } from '../../application/get-groups/get-groups.usecase';
import { Observable } from 'rxjs';
import { MessagePattern } from '@nestjs/microservices';

@Controller('groups')
export class GroupsController {
  constructor(private readonly getGroupUseCase: GetGroupsUseCase) {}

  @Get()
  getGroups$(): Observable<any> {
    return this.getGroupUseCase.getGroups$();
  }

  @MessagePattern('TRAINING-GROUP-MESSAGING')
  async handleGroupMessage(data: any) {
    console.log('Received group message:', data);
    return this.getGroupUseCase.processGroupMessage(data);
  }
}
