import { Socials } from "@prisma/client";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateSocialLinkDto {
    @IsNotEmpty()
    @IsString()
    type: SocialLinkType;

    @IsNotEmpty()
    @IsString()
    link: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    pageId: number;
}

export type SocialLinkType = keyof typeof Socials;