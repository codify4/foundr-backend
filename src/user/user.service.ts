import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async updateEmail(id: number, email: Prisma.UserUpdateInput['email']) {
        await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                email,
            },
        });
    }

    async updateUsername(id: number, username: Prisma.UserUpdateInput['username']) {
        await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                username,
            },
        });
    }
}
