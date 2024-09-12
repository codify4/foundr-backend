import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { PageService } from './page.service';
import { UpdatePageDto } from './dto/update-page.dto';
import { GetCurrentUserId } from 'src/common/decorators/get-current-user-id.decorator';
import { AtGuard } from '../auth/guards/at.guard';

@UseGuards(AtGuard)
@Controller('page')
export class PageController {
    constructor(private pageService: PageService) {}

    @Post()
    createPage(@GetCurrentUserId() userId: number, @Body(ValidationPipe) createPageDto: CreatePageDto) {
        return this.pageService.createPage(userId, createPageDto);
    }

    @Patch(':id')
    updatePage(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updatePageDto: UpdatePageDto) {
        return this.pageService.updatePage(id, updatePageDto);
    }
}
