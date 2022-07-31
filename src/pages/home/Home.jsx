import React from "react";
import styles from "./style.module.scss";
import { Header, Section } from "../../components";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
    </div>
  )
}

export default Home