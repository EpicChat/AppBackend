import { Module } from '@nestjs/common';
import { MainController } from './presentation/controllers/main.controller';
import { MainModule } from './modules/main.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [MainModule, PrometheusModule.register()],
  controllers: [MainController],
  providers: [],
})
export class AppModule {}
