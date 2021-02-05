import axios from 'axios';
import sequelize from './sequelize';
import Character from "./models/Character";

type character = {
    animeography: unknown[],
    favorites: number,
    image_url: string,
    mal_id: number,
    mangaography: unknown[],
    name_kanji: string,
    rank: number,
    title: string,
    url: string
}

const delay = time => new Promise(res=>setTimeout(res,time));

async function scrape(){
    const db = await sequelize();

    let counter = 1664;
    while(counter <= 1800) {
        const url = `https://api.jikan.moe/v3/top/characters/${counter}`;
        const {data}: {data: {top: character[]}} = await axios.get(url);

        console.log(`Fetching ${(counter * 50).toString().padStart(5, '0')} / ${1800}. ${(counter / 1800) * 100}%`)

        await Promise.all(data.top.map(char => {
            return Character.create({
                image_url: char.image_url,
                mal_id: char.mal_id,
                title: char.title,
                url: char.url,
            })
        }));

        await delay(500);
        counter++;
    }
}

scrape();