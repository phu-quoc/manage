import { Injectable } from '@nestjs/common';
import { GetGroupsRepository } from '../../infrastructure/repository/get-groups/get-groups.repository';

@Injectable()
export class GetGroupsUseCase {
  constructor(private readonly getGroupsRepository: GetGroupsRepository) {}
  getGroups() {
    return this.getGroupsRepository.find();
  }
}
