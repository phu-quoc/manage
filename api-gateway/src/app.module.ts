import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupsController } from './app/controllers/groups/groups.controller';
import { GroupsServiceModule } from './app/application/groups/groups.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [GroupsServiceModule, HttpModule],
  controllers: [AppController, GroupsController],
  providers: [AppService],
})
export class AppModule {}
