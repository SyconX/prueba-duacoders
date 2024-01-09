import { Module } from '@nestjs/common';
import { DuacodersService } from './duacoders.service';
import { DuacodersController } from './duacoders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Duacoder } from './entities/duacoder.entity';
import { Skill } from './entities/skill.entity';

@Module({
  controllers: [DuacodersController],
  providers: [DuacodersService],
  imports: [
    TypeOrmModule.forFeature([
      Duacoder,
      Skill
    ])
  ],
  exports: [TypeOrmModule],
})
export class DuacodersModule {}
