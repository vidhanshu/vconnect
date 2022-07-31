import React from "react";
import styles from "./style.module.scss";
import { useParams } from "react-router-dom";
import { Section, WebsiteLayout } from "../../components";
import { Posts } from "../../components";
import { POSTS } from "../../constant/constant";
import { useGlobalContext } from "../../context/useGlobalContext";

function Profile() {
  const { id } = useParams();
  const { user } = useGlobalContext();
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
                <td>{user.name}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{user.country}</td>
                <td><img src={user.country_flag} alt="" /> </td>
              </tr>
            </tbody>
          </table>
        </Section>
      </div>
      <Section className={styles.profilePosts}>
        <h2><u>Posts</u></h2>
        <Posts className={styles.postsContainer} posts={POSTS} />
      </Section>
    </WebsiteLayout>
  )
}

export default Profile