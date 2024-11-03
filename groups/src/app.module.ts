import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/common/database.module';
import { GroupsController } from './controller/groups/groups.controller';
import { GroupsModule } from './controller/groups/groups.module';
import { GetGroupsModule } from './application/get-groups/get-groups.module';

@Module({
  imports: [DatabaseModule, GetGroupsModule, GroupsModule],
  controllers: [AppController, GroupsController],
  providers: [AppService],
})
export class AppModule {}
