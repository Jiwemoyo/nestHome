import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AutorEntity } from './models/autor.model';
import { CreateAutorDto } from './dto/createAutor.dto';
import { ActualizarAutorDto } from './dto/actualizarAutor.dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(AutorEntity)
    private readonly autorRepository: Repository<AutorEntity>,
  ) {}

  async findAll(): Promise<AutorEntity[]> {
    return this.autorRepository.find();
  }

  async findOne(id: string): Promise<AutorEntity> {
    const autor = await this.autorRepository.findOne({ where: { id } });
    if (!autor) {
      throw new NotFoundException('Autor no encontrado');
    }
    return autor;
  }
  

  async create(createAutorDto: CreateAutorDto): Promise<AutorEntity> {
    const autor = this.autorRepository.create(createAutorDto);
    return this.autorRepository.save(autor);
  }

  async update(id: string, updateAutorDto: ActualizarAutorDto): Promise<AutorEntity> {
    const autor = await this.findOne(id);
    this.autorRepository.merge(autor, updateAutorDto);
    return this.autorRepository.save(autor);
  }

  async remove(id: string): Promise<void> {
    const autor = await this.findOne(id);
    await this.autorRepository.remove(autor);
  }
}
