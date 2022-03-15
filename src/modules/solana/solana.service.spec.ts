import { Test, TestingModule } from '@nestjs/testing';
import { SolanaService } from '@modules/solana/solana.service';
import { HttpModule } from '@nestjs/axios';

describe('SolanaService', () => {
    let service: SolanaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            providers: [SolanaService],
        }).compile();

        service = module.get<SolanaService>(SolanaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
