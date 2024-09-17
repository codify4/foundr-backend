import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PageModule } from './page/page.module';
import { SocialsModule } from './socials/socials.module';
import { ProjectsModule } from './projects/projects.module';
import { UserModule } from './user/user.module';
import { GithubCommitsModule } from './github-commits/github-commits.module';
import { XPostsModule } from './x-posts/x-posts.module';

@Module({
  imports: [AuthModule, PrismaModule, PageModule, SocialsModule, ProjectsModule, UserModule, GithubCommitsModule, XPostsModule],
})
export class AppModule {}
