import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { SolanaModule } from '@modules/solana/solana.module';
import { SolanaService } from '@modules/solana/solana.service';

import { GetNftsByAddressResponseType } from '@common/type/GetNftsByAddressResponseType';

import GetNftsByAddressResponseMock from '@modules/solana/specs/mocks/getNftsByAddressResponse.json';

type GetNftsByAddressRestResponseType = {
    data: {
        data: GetNftsByAddressResponseType[];
    };
};

describe('Solana Operations', () => {
    let app: INestApplication;
    const solanaService = {
        getNftsByAddress: () => ({ ...GetNftsByAddressResponseMock }),
    };

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [SolanaModule],
        })
            .overrideProvider(SolanaService)
            .useValue(solanaService)
            .compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it('[GET]/solana/nfts    ->    Should return a 400 (Bad Request)', async () => {
        const response = await request(app.getHttpServer()).get('/solana/nfts');

        expect(response.status).toBe(400);
        expect(response.body).toStrictEqual({
            statusCode: 400,
            message: ['address must be a string'],
            error: 'Bad Request',
        });
    });

    it('[GET]/solana/nfts    ->    Should return a 200 (OK)', async () => {
        const response = await request(app.getHttpServer())
            .get('/solana/nfts')
            .query({
                address: 'ab1cd2efg3hijk_mno45',
            });

        const body = response.body as GetNftsByAddressRestResponseType;

        expect(response.status).toBe(200);
        expect(body.data.data).toStrictEqual(GetNftsByAddressResponseMock.data);
    });
});
