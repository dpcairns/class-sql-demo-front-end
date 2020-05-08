import { getSong } from './api-calls.js';

describe('api calls', () => {
    test('getSong', async () => {
        const song = await getSong(2);

        expect(song).toEqual({
            id: 2,
            name: 'country roads',
            artist: 'john denver',
            length: 2,
            user_id: 1,
            is_single: true
          });
    });

    test('addSong', async () => {
        const song = await getSong(2);

        expect(song).toEqual({
            id: 2,
            name: 'country roads',
            artist: 'john denver',
            length: 2,
            user_id: 1,
            is_single: true
          });
    });


    test('getSong', async () => {
        const song = await getSong(2);

        expect(song).toEqual({
            id: 2,
            name: 'country roads',
            artist: 'john denver',
            length: 2,
            user_id: 1,
            is_single: true
          });
    });

});