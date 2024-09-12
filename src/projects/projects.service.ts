import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) {}

    async getProjects() {
        return await this.prisma.project.findMany();
    }

    async getProjectById(id: number) {
        const project = await this.prisma.project.findUnique({
            where: { id },
        });

        if(!project) throw new HttpException('Project not found', 404);

        return project;
    }

    async createProject(project: CreateProjectDto) {
        const { name, oneLiner, url, mrr, pageId } = project;

        const page = await this.prisma.page.findUnique({
            where: { id: pageId },
        });

        if (!page) {
            throw new HttpException('Page not found', 404);
        }

        const newProject = await this.prisma.project.create({
            data: {
                name,
                oneLiner,
                url,
                mrr,
                pageId,
            },
        });

        if(!newProject) throw new HttpException('Not valid ', 404);

        return newProject;
    }

    async updateProject(id: number, project: Prisma.ProjectUpdateInput) {
        const updatedProject = await this.prisma.project.update({
            where: { id },
            data: project,
        });

        if(!updatedProject) throw new HttpException('Project not found', 404);

        return updatedProject;
    }

    async deleteProject(id: number) {
        const project = await this.prisma.project.findUnique({
            where: { id },
        });

        if(!project) throw new HttpException('Project not found', 404);

        await this.prisma.project.delete({
            where: { id },
        });

        return 'Project deleted';
    }
}
