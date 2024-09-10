import { IsNotEmpty, IsString } from "class-validator";

export class updateEmailDto {
    @IsNotEmpty()
    @IsString()
    email: string;
}