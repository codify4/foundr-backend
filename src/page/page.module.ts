import { Module } from '@nestjs/common';
import { PageController } from './page.controller';
import { PageService } from './page.service';
import { SocialsModule } from 'src/socials/socials.module';
import { ProjectsModule } from 'src/projects/projects.module';

@Module({
  imports: [SocialsModule, ProjectsModule],
  controllers: [PageController],
  providers: [PageService]
})
export class PageModule {}
