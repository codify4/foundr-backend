import { Module } from '@nestjs/common';
import { XPostsService } from './x-posts.service';
import { XPostsController } from './x-posts.controller';

@Module({
  providers: [XPostsService],
  controllers: [XPostsController]
})
export class XPostsModule {}
