import { Global, Module } from '@nestjs/common';
import { PG_CONNECTION } from '../../constant';
import { Pool } from 'pg';

const databaseProvider = {
  provide: PG_CONNECTION,
  useFactory: async () => {
    const pool = new Pool({
      user: process.env.DB_USER || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME || 'management',
      password: process.env.DB_PASSWORD || 'Admin@123',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
    });
    return pool.connect();
  },
};

@Global()
@Module({
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class DatabaseModule {}
