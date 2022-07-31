import styles from "./style.module.scss";
import { createContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PostEditorModal, Posts, Section, WebsiteLayout } from "../../components";
import { POSTS } from "../../constant/constant";

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
        <PostEditorModal setModal={setModal} />
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