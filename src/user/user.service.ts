import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async updateUser(id: number, updateUser: Prisma.UserUpdateInput) {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });

        if(!user) throw new HttpException('User not found', 404);

        const updatedUser = await this.prisma.user.update({
            where: {
                id,
            },
            data: updateUser
        });

        return updatedUser;
    }
}
