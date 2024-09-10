import { Module } from '@nestjs/common';
import { SocialsController } from './socials.controller';
import { SocialsService } from './socials.service';

@Module({
  controllers: [SocialsController],
  providers: [SocialsService]
})
export class SocialsModule {}
