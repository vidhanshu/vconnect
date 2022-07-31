import styles from "./style.module.scss";
import { createContext, useState } from "react";
import { CreatePost, Header, ModalContainer, Posts, Section } from "../../components";
import { getRandomNumber } from "../../utils/utils";

const data = [
  {
    name: 'david wars',
    avatar: `https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`,
    image: 'https://th.bing.com/th/id/OIP.zsEgRepQ6Uh5OYkkhJyn2gHaE5?pid=ImgDet&rs=1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    date: '2020-01-01 at 10:00 am',
    likes: 10,
    comments: 2,
  }
];
export const postsContext = createContext(data);

function Home() {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState(data);

  const context_to_be_passed = {
    posts,
    setPosts,
    modal,
    setModal
  }

  return (
    <postsContext.Provider value={context_to_be_passed}>
      <Header />
      {modal &&
        <ModalContainer>
          {<CreatePost cancel={() => setModal(false)} avatar={`https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`} />}
        </ModalContainer>
      }
      <div className={styles.homeContainer}>
        <Section>
          <div className={styles.createPost}>
            <p>Create a post</p>
            <button onClick={() => setModal(true)}>New</button>
          </div>
        </Section>
        <Section>
          <div className={styles.posts}>
            <Posts posts={posts} />
          </div>
        </Section>
      </div>
    </postsContext.Provider>
  )
}

export default Home