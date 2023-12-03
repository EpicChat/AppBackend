import { Module } from '@nestjs/common';
import { MainController } from './presentation/controllers/main.controller';
import { MainModule } from './modules/main.module';

@Module({
  imports: [MainModule],
  controllers: [MainController],
  providers: [],
})
export class AppModule {}
