import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutorModule } from './autor/autor.module';
import { AutorModule } from './modules/autor/autor.module';
import { LibroModule } from './modules/libro/libro.module';

@Module({
  imports: [AutorModule, LibroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
