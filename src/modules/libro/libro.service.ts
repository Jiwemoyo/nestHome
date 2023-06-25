import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LibroEntity } from './models/libro.model';
import { CreateLibroDto } from './dto/createLibro.dto';
import { ActualizarLibroDto } from './dto/actualizarLibro.dto';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(LibroEntity)
    private readonly libroRepository: Repository<LibroEntity>,
  ) {}

  async findAll(): Promise<LibroEntity[]> {
    return this.libroRepository.find();
  }

  async findOne(id: string): Promise<LibroEntity> {
    const libro = await this.libroRepository.findOne({ where: { id } });
    if (!libro) {
      throw new NotFoundException('Libro no encontrado');
    }
    return libro;
  }
  

  async create(createLibroDto: CreateLibroDto): Promise<LibroEntity> {
    const libro = this.libroRepository.create(createLibroDto);
    return this.libroRepository.save(libro);
  }

  async update(id: string, updateLibroDto: ActualizarLibroDto): Promise<LibroEntity> {
    const libro = await this.findOne(id);
    this.libroRepository.merge(libro, updateLibroDto);
    return this.libroRepository.save(libro);
  }

  async remove(id: string): Promise<void> {
    const libro = await this.findOne(id);
    await this.libroRepository.remove(libro);
  }
}
