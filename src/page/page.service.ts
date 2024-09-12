import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePageDto } from './dto/create-page.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PageService {
    constructor(private prisma: PrismaService) {}

    async createPage(userId: number, createPageDto: CreatePageDto) {
        const { image, name, bio, socials, projects } = createPageDto;

        const newPage = await this.prisma.page.create({
            data: {
                image,
                name,
                bio,
                socials,
                projects,
                userId,
            },
        });

        if(!newPage) throw new HttpException('Not valid ', 404);

        return newPage;
    }

    async updatePage(id: number, updatePageDto: Prisma.PageUpdateInput) {

        const page = await this.prisma.page.findUnique({
            where: { id },
        });

        if(!page) throw new HttpException('Page not found', 404);
        

        const updatedPage = await this.prisma.page.update({
            where: { id },
            data: updatePageDto,
        });

        if(!updatedPage) throw new HttpException('Page not found', 404);

        return updatedPage;
    }
}
