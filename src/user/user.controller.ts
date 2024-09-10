import { Body, Controller, HttpCode, HttpStatus, Patch, UseGuards, ValidationPipe } from '@nestjs/common';
import { AtGuard } from 'src/auth/guards/at.guard';
import { GetCurrentUserId } from 'src/common/decorators/get-current-user-id.decorator';
import { UserService } from './user.service';
import { updateEmailDto } from './dto/update-email.dto';
import { updateUsernameDto } from './dto/update-username.dto';

@UseGuards(AtGuard)
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @HttpCode(HttpStatus.OK)
    @Patch('updateEmail')
    updateEmail(@GetCurrentUserId() id: number, @Body(ValidationPipe) updateEmailDto: updateEmailDto) {
        return this.userService.updateEmail(id, updateEmailDto.email);
    }

    @HttpCode(HttpStatus.OK)
    @Patch('updateUsername')
    updateUsername(@GetCurrentUserId() id: number, @Body(ValidationPipe) updateUsernameDto: updateUsernameDto) {
        return this.userService.updateUsername(id, updateUsernameDto.username);
    }
}
