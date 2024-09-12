import { IsNotEmpty, IsString } from "class-validator";
import { SocialLinkType } from "./create-social.dto";

export class UpdateSocialLinkDto {
    @IsNotEmpty()
    type: SocialLinkType;

    @IsNotEmpty()
    @IsString()
    link: string;
}