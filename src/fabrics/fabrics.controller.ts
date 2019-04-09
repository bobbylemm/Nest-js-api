import { Controller, Get } from '@nestjs/common';

@Controller('fabrics')
export class FabricsController {
  @Get()
  findAll(): string {
    return 'found all fabrics';
  }
}
