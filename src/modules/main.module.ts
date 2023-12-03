import { Module } from '@nestjs/common';
import { MainController } from 'src/presentation/controllers/main.controller';

@Module({
  imports: [],
  controllers: [MainController],
  providers: [],
})
export class MainModule {}
