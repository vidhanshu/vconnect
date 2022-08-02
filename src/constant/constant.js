import { getRandomNumber } from "../utils/utils";

const POSTS = [

];

const USERS = [
    {
        id: 1,
        name: "John Doe1",
        avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
        country: 'India',
        country_flag: `https://countryflagsapi.com/png/india`
    },
    {
        id: 2,
        name: "John Doe2",
        avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
        country: 'Brazil',
        country_flag: `https://countryflagsapi.com/png/Brazil`
    },
    {
        id: 3,
        name: "John Doe3",
        avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
        country: 'England',
        country_flag: `https://countryflagsapi.com/png/England`
    },
    {
        id: 4,
        name: "John Doe4",
        avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
        country: 'China',
        country_flag: `https://countryflagsapi.com/png/China`
    },
    {
        id: 5,
        name: "John Doe5",
        avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
        country: 'Thailand',
        country_flag: `https://countryflagsapi.com/png/Thailand`
    },
    {
        id: 6,
        name: "John Doe6",
        avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
        country: 'japan',
        country_flag: `https://countryflagsapi.com/png/japan`
    },
    {
        id: 7,
        name: "John Doe7",
        avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
        country: 'India',
        country_flag: `https://countryflagsapi.com/png/india`
    },
]

export { USERS, POSTS }