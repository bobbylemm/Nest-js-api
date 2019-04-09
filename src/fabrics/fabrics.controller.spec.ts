import { Test, TestingModule } from '@nestjs/testing';
import { FabricsController } from './fabrics.controller';

describe('Fabrics Controller', () => {
  let controller: FabricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FabricsController],
    }).compile();

    controller = module.get<FabricsController>(FabricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
