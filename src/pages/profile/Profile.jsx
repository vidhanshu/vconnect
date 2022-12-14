import React from "react";
import styles from "./style.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_posts_by_user } from "../../api/post";
import { getUser } from "../../api/user";
import { Section, WebsiteLayout } from "../../components";
import { Posts } from "../../components";
import { POSTS } from "../../constant/constant";
import { useGlobalContext } from "../../context/useGlobalContext";

function Profile() {
  const { id } = useParams();
  const [userData, setUserData] = React.useState({});
  const [posts,setPosts] = React.useState([]);
  const { setLoading } = useGlobalContext();

  useEffect(() => {
    getUserData();
  }, [])

  const getUserData = async () => {
    setLoading(true);
    const user = await getUser(id);
    setLoading(false);
    if (!user) {
      window.location.href = '/';
    } else {
      setUserData(user);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const posts = await get_posts_by_user(id);
    if (posts) {
      setPosts(posts);
    }
  }

  return (
    <WebsiteLayout>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.backgroundImage}>
            <div className={styles.avatar}>
              <img src="/images/profile.jpg" alt="profile" />
            </div>
          </div>
        </div>
        <Section className={styles.profileInfo}>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{userData?.name}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{userData?.country}</td>
                <td><img src={`https://countryflagsapi.com/png/${userData?.country}`} alt="" /> </td>
              </tr>
            </tbody>
          </table>
        </Section>
      </div>
      <Section className={styles.profilePosts}>
        <h2><u>Posts</u></h2>
        {
          posts.length
            ? <Posts className={styles.postsContainer} posts={posts} />
            : <h1 className={styles.noPosts}>No posts yet</h1>
        }
      </Section>
    </WebsiteLayout>
  )
}

export default Profile;