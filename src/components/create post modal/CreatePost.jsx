import Post from "../post/Post";
import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import { useContext } from "react";
import { useGlobalContext } from "../../context/useGlobalContext";
import { postsContext } from "../../pages/home/Home";
import { checkIfEmpty, getFormattedDate } from "../../utils/utils";

function CreatePost({ cancel, avatar = '', desc = '', img = '', isEditing = false }) {
  const [description, setDescription] = useState(desc);
  const [image, setImage] = useState(img);

  const { user } = useGlobalContext();

  let limit = 900;

  const { setPosts } = useContext(postsContext);

  const post = () => {
    const newPost = {
      name: user.name,
      owner: user._id,
      avatar,
      image,
      text: description,
      date: getFormattedDate(),
      likes: 0,
      comments: 0,
    }
    if (checkIfEmpty([description])) {
      return alert('Please fill in all fields')
    }
    setPosts((posts) => [...posts, newPost]);
    cancel();
  }
  const update = () => {
    cancel();
  }

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
      <input value={image} type="url" placeholder="image link" onChange={(evt) => setImage(evt.target.value)} />
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
        {!isEditing
          ? <button className={styles.post} onClick={() => {
            post();
          }}>Post</button>
          : <button className={styles.post} onClick={() => {
            update();
          }}>Update</button>}
        <button className={styles.cancel} onClick={cancel}>Cancel</button>
      </div>
    </div>
  )
}

export default CreatePost