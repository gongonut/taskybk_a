import { Test, TestingModule } from '@nestjs/testing';
import { ProductxController } from './productx.controller';
import { ProductxService } from './productx.service';

describe('ProductxController', () => {
  let controller: ProductxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductxController],
      providers: [ProductxService],
    }).compile();

    controller = module.get<ProductxController>(ProductxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
