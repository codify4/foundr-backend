import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    @Get()
    getProjects() {
        return this.projectsService.getProjects();
    }

    @Get('project/:id')
    getProjectById(@Param('id', ParseIntPipe) id: number) {
        return this.projectsService.getProjectById(id);
    }

    @Post()
    createProject(@Body(ValidationPipe) project: CreateProjectDto) {
        return this.projectsService.createProject(project);
    }

    @Patch('project/:id')
    updateProject(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) project: UpdateProjectDto) {
        return this.projectsService.updateProject(id, project);
    }

    @Delete('project/:id')
    deleteProject(@Param('id', ParseIntPipe) id: number) {
        return this.projectsService.deleteProject(id);
    }
}