import Post from "../post/Post";
import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import { useContext } from "react";
import { create_post } from "../../api/post";
import { useGlobalContext } from "../../context/useGlobalContext";
import { postsContext } from "../../pages/home/Home";
import { checkIfEmpty, getFormattedDate } from "../../utils/utils";

function CreatePost({ cancel, avatar = '', desc = '', img = '', isEditing = false }) {
  const [description, setDescription] = useState(desc);
  const [image, setImage] = useState(img);

  const { user, setLoading } = useGlobalContext();

  let limit = 10000;

  const { setPosts } = useContext(postsContext);

  const post = async () => {
    const newPost = {
      name: user.name,
      owner: user._id,
      avatar,
      image,
      description,
      date: getFormattedDate(),
      likes: 0,
      comments: 0,
    }
    if (checkIfEmpty([description])) {
      return alert('Please fill in all fields')
    }
    setLoading(true);
    const res = await create_post(newPost);
    setLoading(false);
    cancel();
    if (res) {
      window.location.reload();
    }
  }
  const update = () => {
    cancel();
  }

  return (
    <div className={styles.createPostContainer}>
      <textarea cols={10} placeholder="caption - you can write html"
        onChange={(evt) => {
          setDescription(evt.target.value.substring(0, limit));
        }}
        value={description}
      />
      <p className={styles.charCount}>
        {description.length === limit && <span className={styles.dangerMessage}>Max limit reached</span>}
        &nbsp; {description.length}/{limit}
      </p>
      <input value={image} type="url" placeholder="image link" onChange={(evt) => setImage(evt.target.value)} />
      <h4><u> post preview: </u></h4>
      <div className={styles.previewContainer}>
        <Post post={{
          description: description?.replace(/\n/ig, '<br/>'),
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