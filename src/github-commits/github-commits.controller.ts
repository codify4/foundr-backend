import { Controller, Get } from '@nestjs/common';

@Controller('commits')
export class GithubCommitsController {
    constructor() {}

    @Get()
    getGithubCommits() {
        return 'github-commits';
    }
}
