import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PageModule } from './page/page.module';
import { SocialsModule } from './socials/socials.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [AuthModule, PrismaModule, DashboardModule, PageModule, SocialsModule, ProjectsModule],
})
export class AppModule {}
