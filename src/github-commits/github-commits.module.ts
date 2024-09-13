import { Module } from '@nestjs/common';
import { GithubCommitsController } from './github-commits.controller';
import { GithubCommitsService } from './github-commits.service';

@Module({
  controllers: [GithubCommitsController],
  providers: [GithubCommitsService]
})
export class GithubCommitsModule {}
