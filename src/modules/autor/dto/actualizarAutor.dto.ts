import { IsString, Length } from 'class-validator';

export class ActualizarAutorDto {
  @IsString()
  @Length(1, 100)
  nombre?: string;

  @IsString()
  @Length(0, 255)
  descripcion?: string;
}
