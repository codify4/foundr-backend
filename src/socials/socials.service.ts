import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSocialLinkDto } from './dto/create-social.dto';

@Injectable()
export class SocialsService {
    constructor(private prisma: PrismaService) {}

    async getSocials() {
        return await this.prisma.socialLink.findMany();
    }

    async getSocialById(id: number) {
        return await this.prisma.socialLink.findUnique({
            where: { id },
        });
    }

    async createSocialLink(socialLink: CreateSocialLinkDto) {
        const { type, link, pageId } = socialLink;

        const page = await this.prisma.page.findUnique({
            where: { id: pageId },
        });

        if (!page) {
            throw new NotFoundException(`Page with ID ${pageId} not found`);
        }

        const newSocialLink = await this.prisma.socialLink.create({
            data: {
                type,
                link,
                pageId,
            },
        });

        if(!socialLink) throw new HttpException('Social link not found', 404);

        return newSocialLink;
    }

    async updateSocialLink(id: number, socialLink: Prisma.SocialLinkUpdateInput) {
        const updatedSocialLink = await this.prisma.socialLink.update({
            where: { id },
            data: socialLink,
        });

        if(!updatedSocialLink) throw new HttpException('Social link not found', 404);

        return updatedSocialLink;
    }

    async deleteSocialLink(id: number) {
        const socialLink = await this.prisma.socialLink.findUnique({
            where: { id },
        });

        if(!socialLink) throw new HttpException('Social link not found', 404);

        await this.prisma.socialLink.delete({
            where: { id },
        });

        return 'Social link deleted';
    }
}
