import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Duacoder, Skill } from './entities';
import { CreateDuacoderDto, UpdateDuacoderDto } from './dto';


@Injectable()
export class DuacodersService {
  logger = new Logger();

  constructor(
    @InjectRepository(Duacoder)
    private readonly duacoderRepository: Repository<Duacoder>,
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>
  ) {}
  async create(createDuacoderDto: CreateDuacoderDto) {
    const {skills, ...duacoderData} = createDuacoderDto;
    try {
      const duacoder: Duacoder = await this.duacoderRepository.create({...duacoderData});
      const skillsArray: Skill[] = [];
      skills.forEach( 
        skill => {
          skillsArray.push(this.skillRepository.create({name: skill}))
        }
      )
      duacoder.skills = skillsArray;
      const response = await this.duacoderRepository.save(duacoder);
      return {
        ok: true,
        message: "Duacoder creado correctamente",
        response: response
      }
    } catch (error) {
      
      this.logger.error(error);
      
      return {
        ok: false,
        message: "Revisar logs del servidor",
      }
    }
  }

  findAll() {
    return `This action returns all duacoders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} duacoder`;
  }

  update(id: number, updateDuacoderDto: UpdateDuacoderDto) {
    return `This action updates a #${id} duacoder`;
  }

  remove(id: number) {
    return `This action removes a #${id} duacoder`;
  }
}
