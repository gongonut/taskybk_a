import { Test, TestingModule } from '@nestjs/testing';
import { PollExecuteController } from './poll-execute.controller';
import { PollExecuteService } from './poll-execute.service';

describe('PollExecuteController', () => {
  let controller: PollExecuteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollExecuteController],
      providers: [PollExecuteService],
    }).compile();

    controller = module.get<PollExecuteController>(PollExecuteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
