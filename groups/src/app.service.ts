import { Inject, Injectable } from "@nestjs/common";
import { PG_CONNECTION } from "./constant";
import { PoolClient } from 'pg';

@Injectable()
export class AppService {
  constructor(@Inject(PG_CONNECTION) private readonly conn: PoolClient) {}
  async getHello(): Promise<any> {
    const res = await this.conn.query('SELECT * FROM groups');
    return res.rows;
  }
}
