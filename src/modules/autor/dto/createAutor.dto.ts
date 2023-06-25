import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateAutorDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  nombre: string;

  @IsString()
  @Length(0, 255)
  descripcion: string;
}
