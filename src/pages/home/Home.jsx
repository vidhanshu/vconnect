import styles from "./style.module.scss";
import { createContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { get_posts } from "../../api/post";
import { PostEditorModal, Posts, Section, WebsiteLayout } from "../../components";
import { useGlobalContext } from "../../context/useGlobalContext";

export const postsContext = createContext();

function Home() {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const context_to_be_passed = {
    posts,
    setPosts,
    modal,
    setModal
  }

  const { setLoading } = useGlobalContext();

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    setLoading(true);
    const res = await get_posts();
    setLoading(false);
    console.log(res);
    if (res) {
      setPosts(res);
    }
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
              {
                posts.length
                  ? <Posts className={styles.postsContainer} posts={posts} />
                  : <h1 className={styles.noPosts}>No posts yet</h1>
              }
            </div>
          </Section>
        </div>
      </WebsiteLayout>
    </postsContext.Provider>
  )
}

export default Home