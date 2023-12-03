import { Controller, Get } from '@nestjs/common';

@Controller()
export class MainController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'AppBackesnd running ... porra';
  }
}
