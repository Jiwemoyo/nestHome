import { IsString, Length, IsUUID } from 'class-validator';

export class ActualizarLibroDto {
  @IsString()
  @Length(1, 100)
  titulo?: string;

  @IsString()
  @Length(0, 255)
  descripcion?: string;

  @IsUUID()
  autorId?: string;
}
