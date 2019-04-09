import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FabricsController } from './fabrics/fabrics.controller';

@Module({
  imports: [],
  controllers: [AppController, FabricsController],
  providers: [AppService],
})
export class AppModule {}
