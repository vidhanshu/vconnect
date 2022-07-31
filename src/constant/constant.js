import { getRandomNumber } from "../utils/utils";

const POSTS = [
    {
        name: 'david wars',
        avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
        image: 'https://th.bing.com/th/id/OIP.zsEgRepQ6Uh5OYkkhJyn2gHaE5?pid=ImgDet&rs=1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        date: '2020-01-01 at 10:00 am',
        likes: 10,
        comments: 2,
        owner: '135kfh',
    },
    {
        name: 'vidhanshu borade',
        avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
        image: 'https://th.bing.com/th/id/OIP.zsEgRepQ6Uh5OYkkhJyn2gHaE5?pid=ImgDet&rs=1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        date: '2020-01-01 at 10:00 am',
        likes: 10,
        comments: 2,
        owner: '135jfh'
    },
    {
        name: 'vidhanshu borade',
        avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
        image: 'https://th.bing.com/th/id/OIP.zsEgRepQ6Uh5OYkkhJyn2gHaE5?pid=ImgDet&rs=1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        date: '2020-01-01 at 10:00 am',
        likes: 10,
        comments: 2,
        owner: '135jfh'
    }
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