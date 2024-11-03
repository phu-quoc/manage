import { IGetGroupsRepository } from '../../../domain/service/get-groups.i';
import { Inject } from '@nestjs/common';
import { PoolClient } from 'pg';
import { Group } from '../../../domain/model/group.entity';
import { PG_CONNECTION } from '../../../constant';
import { from, map, Observable } from 'rxjs';

export class GetGroupsRepository implements IGetGroupsRepository {
  constructor(@Inject(PG_CONNECTION) private readonly conn: PoolClient) {}

  find$(): Observable<Group[]> {
    const query = 'SELECT * FROM groups';

    return from(this.conn.query(query)).pipe(
      map((result) =>
        result.rows.map((row) => new Group(row.id, row.name, row.description)),
      ),
    );
  }
}
