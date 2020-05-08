import request from 'superagent';

const URL = 'http://localhost:3003';

export const getSong = async (someId) => {
    const data = await request.get(`${URL}/songs/${someId}`)

    return data.body;
}

export const getSongs = async () => {
    const data = await request.get(`${URL}/songs/`)

    return data.body;
}

export const addSong = async (song) => {
    const data = await request.post(`${URL}/songs/`, song)

    return data.body;
}