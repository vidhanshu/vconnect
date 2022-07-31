import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import { CreatePost, Header, ModalContainer, Posts, Section } from "../../components";
import { getRandomNumber } from "../../utils/utils";

function Home() {
  const [modal, setModal] = useState(false);

  return (
    <>
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
            <Posts />
          </div>
        </Section>
      </div>
    </>
  )
}

export default Home