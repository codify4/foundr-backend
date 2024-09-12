import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { SocialsService } from './socials.service';
import { CreateSocialLinkDto } from './dto/create-social.dto';
import { UpdateSocialLinkDto } from './dto/update-social.dto';

@Controller('socials')
export class SocialsController {
    constructor(private socialsService: SocialsService) {}

    @Get()
    getSocials() {
        return this.socialsService.getSocials();
    }

    @Get('social/:id')
    getSocialById(@Param('id', ParseIntPipe) id: number) {
        return this.socialsService.getSocialById(id);
    }

    @Post()
    createSocialLink(@Body(ValidationPipe) socialLink: CreateSocialLinkDto) {
        return this.socialsService.createSocialLink(socialLink);
    }

    @Patch('social/:id')
    updateSocialLink(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) socialLink: UpdateSocialLinkDto) {
        return this.socialsService.updateSocialLink(id, socialLink);
    }

    @Delete('social/:id')
    deleteSocialLink(@Param('id', ParseIntPipe) id: number) {
        return this.socialsService.deleteSocialLink(id);
    }
}
