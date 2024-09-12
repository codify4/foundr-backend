import { IsOptional, IsString } from "class-validator";
import { Prisma } from "@prisma/client";

export class UpdatePageDto {

    @IsString()
    @IsOptional()
    image?: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    bio?: string;

    @IsOptional()
    socials?: Prisma.SocialLinkUpdateManyWithoutPageNestedInput;

    @IsOptional()
    projects?: Prisma.ProjectUpdateManyWithoutPageNestedInput;
}