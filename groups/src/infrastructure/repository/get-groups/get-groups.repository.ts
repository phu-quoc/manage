import { IGetGroupsRepository } from '../../../domain/service/get-groups.i';
import { Inject } from '@nestjs/common';
import { PoolClient } from 'pg';
import { Group } from '../../../domain/model/group.entity';
import { PG_CONNECTION } from '../../../constant';

export class GetGroupsRepository implements IGetGroupsRepository {
  constructor(@Inject(PG_CONNECTION) private readonly conn: PoolClient) {}

  async find(): Promise<Group[]> {
    const query = 'SELECT * FROM groups';
    const result = await this.conn.query(query);

    return result.rows.map(
      (row) => new Group(row.id, row.name, row.description),
    );
  }
}
