import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { DuacodersService } from './duacoders.service';
import { CreateDuacoderDto, UpdateDuacoderDto } from './dto';


@Controller('duacoders')
export class DuacodersController {
  constructor(private readonly duacodersService: DuacodersService) {}

  @Post()
  async create(@Body() createDuacoderDto: CreateDuacoderDto) {
    const duacoder = await this.duacodersService.create(createDuacoderDto);
    return {
      message: 'Duacoder creado con éxito',
      duacoder
    }
  }

  @Get()
  findAll() {
    return this.duacodersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.duacodersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDuacoderDto: UpdateDuacoderDto) {
    return this.duacodersService.update(+id, updateDuacoderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.duacodersService.remove(+id);
  }
}
