import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class XPostsController {
    constructor() {}

    @Get()
    getXPosts() {
        return 'x-posts';
    }
}
