import { IsString, IsNotEmpty, Length, IsUUID } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  titulo: string;

  @IsString()
  @Length(0, 255)
  descripcion: string;

  @IsUUID()
  autorId: string;
}
