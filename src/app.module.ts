import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PageModule } from './page/page.module';

@Module({
  imports: [AuthModule, PrismaModule, DashboardModule, PageModule],
})
export class AppModule {}
