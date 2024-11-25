import { Test, TestingModule } from '@nestjs/testing';
import { ProductxService } from './productx.service';

describe('ProductxService', () => {
  let service: ProductxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductxService],
    }).compile();

    service = module.get<ProductxService>(ProductxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
