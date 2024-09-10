import { IsNotEmpty, IsString } from "class-validator";

export class updateUsernameDto {
    @IsNotEmpty()
    @IsString()
    username: string;
}