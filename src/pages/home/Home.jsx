import React from "react";
import styles from "./style.module.scss";
import { Header, Posts, Section } from "../../components";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Section>
        <div className={styles.createPost}>
          <p>Create a post</p>
          <button>New</button>
        </div>
      </Section>
      <Section>
        <div className={styles.posts}>
          <Posts />
        </div>
      </Section>
    </div>
  )
}

export default Home