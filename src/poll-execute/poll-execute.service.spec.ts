import { Test, TestingModule } from '@nestjs/testing';
import { PollExecuteService } from './poll-execute.service';

describe('PollExecuteService', () => {
  let service: PollExecuteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollExecuteService],
    }).compile();

    service = module.get<PollExecuteService>(PollExecuteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
