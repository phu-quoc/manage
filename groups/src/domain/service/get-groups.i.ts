import { Group } from '../model/group.entity';

export interface IGetGroupsRepository {
  find(): Promise<Group[]>;
}
