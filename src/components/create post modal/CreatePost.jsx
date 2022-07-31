import Post from "../post/Post";
import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import { getFormattedDate } from "../../utils/utils";

function CreatePost({ cancel, avatar }) {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  let limit = 900;

  return (
    <div className={styles.createPostContainer}>
      <textarea cols={10} placeholder="caption - you can write html"
        onChange={(evt) => {
          setDescription(evt.target.value.substring(0, 300));
        }}
        value={description}
      />
      <p className={styles.charCount}>
        {description.length === limit && <span className={styles.dangerMessage}>Max limit reached</span>}
        &nbsp; {description.length}/{limit}
      </p>
      <input type="url" placeholder="image link" onChange={(evt) => setImage(evt.target.value)} />
      <div className={styles.previewContainer}>
        <h4><u> post preview: </u></h4>
        <Post post={{
          text: description?.replace(/\n/ig, '<br/>'),
          avatar,
          image,
          date: getFormattedDate(),
        }}
          disable={true}
        />
      </div>
      <div className={styles.postButtonGroup}>
        <button className={styles.post}>Post</button>
        <button className={styles.cancel} onClick={cancel}>Cancel</button>
      </div>
    </div>
  )
}

export default CreatePost