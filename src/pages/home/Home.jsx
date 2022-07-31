import styles from "./style.module.scss";
import { createContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CreatePost, Header, ModalContainer, Posts, Section, WebsiteLayout } from "../../components";
import { POSTS } from "../../constant/constant";
import { getRandomNumber } from "../../utils/utils";

export const postsContext = createContext(POSTS);

function Home() {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState(POSTS);

  const context_to_be_passed = {
    posts,
    setPosts,
    modal,
    setModal
  }

  return (
    <postsContext.Provider value={context_to_be_passed}>
      {modal &&
        <ModalContainer>
          {<CreatePost cancel={() => setModal(false)} avatar={`https://randomuser.me/api/portraits/men/${getRandomNumber(0, 99)}.jpg`} />}
        </ModalContainer>
      }
      <WebsiteLayout>
        <div className={styles.homeContainer}>
          <Section>
            <div className={styles.createPost}>
              <p>Create a post</p>
              <div className={styles.buttonGroup}>
                <Link to='/searchUser'><button><AiOutlineSearch className='icon' /></button></Link>
                <button onClick={() => setModal(true)}>New</button>
              </div>
            </div>
          </Section>
          <Section>
            <div className={styles.posts}>
              <Posts posts={posts} />
            </div>
          </Section>
        </div>
      </WebsiteLayout>
    </postsContext.Provider>
  )
}

export default Home