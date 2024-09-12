import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePageDto {

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    bio: string;

    socials: Prisma.SocialLinkUpdateManyWithoutPageNestedInput;

    projects: Prisma.ProjectUpdateManyWithoutPageNestedInput;
}