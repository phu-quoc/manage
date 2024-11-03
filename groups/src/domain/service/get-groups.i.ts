import { Group } from '../model/group.entity';
import { Observable } from 'rxjs';

export interface IGetGroupsRepository {
  find$(): Observable<Group[]>;
}
