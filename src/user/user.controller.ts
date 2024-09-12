import { Body, Controller, HttpCode, HttpStatus, Patch, UseGuards, ValidationPipe } from '@nestjs/common';
import { AtGuard } from 'src/auth/guards/at.guard';
import { GetCurrentUserId } from 'src/common/decorators/get-current-user-id.decorator';
import { UserService } from './user.service';
import { updateUserDto } from './dto/update-email.dto';

@UseGuards(AtGuard)
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @HttpCode(HttpStatus.OK)
    @Patch('updateUser')
    updateUser(@GetCurrentUserId() id: number, @Body(ValidationPipe) updateUserDto: updateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }
}
