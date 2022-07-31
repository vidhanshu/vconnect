import Post from "../post/Post";
import React from "react";
import styles from "./style.module.scss";
import { getRandomNumber } from "../../utils/utils";

const posts = [
  {
    name: 'david wars',
    avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
    image: 'https://th.bing.com/th/id/OIP.zsEgRepQ6Uh5OYkkhJyn2gHaE5?pid=ImgDet&rs=1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    date: '2020-01-01 at 10:00 am',
    likes: 10,
    comments: 2,
  },
  {
    name: 'david wars',
    avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
    image: '',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    date: '2020-01-01 at 10:00 am',
    likes: 10,
    comments: 2,
  },
  {
    name: 'david wars',
    avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
    image: '',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    date: '2020-01-01 at 10:00 am',
    likes: 10,
    comments: 2,
  },
  {
    name: 'david wars',
    avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
    image: 'https://th.bing.com/th/id/OIP.zsEgRepQ6Uh5OYkkhJyn2gHaE5?pid=ImgDet&rs=1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    date: '2020-01-01 at 10:00 am',
    likes: 10,
    comments: 2,
  },
]
function Posts() {
  return (
    <div className={styles.postsContainer}>
      {
        posts.map((post, index) => {
          return <Post key={index} post={post} />
        })
      }
    </div>
  )
}

export default Posts