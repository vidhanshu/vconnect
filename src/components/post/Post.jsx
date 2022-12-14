import PostEditorModal from "../post editor modal/PostEditorModal";
import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import { AiFillLike, AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { valueShortener } from "../../utils/utils";

function Post({ post, disable = false, option = false }) {
  const {
    name = 'vidhanshu borade',
    avatar = '',
    image,
    description = '',
    date = '2020-01-01 at 10:00pm',
    likes = 0,
    comments = 0,
    _id = 1
  } = post;
  const [liked, setLiked] = React.useState(false);
  const [likesCount, setLikes] = React.useState(likes);
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.postContainer}>
      {
        modal &&
        <PostEditorModal
          setModal={setModal}
          isEditing={true}
          post={post}
        />
      }
      {/* post header */}
      <div className={styles.postHeader}>
        <Link to={`/profile/${_id}`}>
          <img src={avatar} alt="" />
        </Link>
        <div className={styles.postOwnerInfo}>
          <Link to={`/profile/${_id}`}>
            <h3>{name}</h3>
          </Link>
          <p>{date}</p>
          {option &&
            <div className={styles.editOption}>
              <p onClick={() => setModal(true)} className={styles.success}>Edit</p>
              <p onClick={() => {

              }} className={styles.danger}>Delete</p>
            </div>
          }
        </div>
      </div>
      {/* post description */}
      <div className={styles.postDescription}>
        <p dangerouslySetInnerHTML={
          {
            __html: description
          }
        }>
        </p>
      </div>
      {/* post image */}
      {image &&
        <div className={styles.postImage}>
          <img src={image} alt="post_image" />
        </div>
      }
      {/* post footer */}
      <div className={styles.postFooter}>
        <p>{valueShortener(likesCount)} {!liked
          ? <AiOutlineLike onClick={() => {
            if (!disable) {
              setLiked(true);
              setLikes(likesCount + 1);
            }
          }} />
          : <AiFillLike onClick={() => {
            if (!disable) {
              setLiked(false);
              setLikes(likesCount - 1);
            }
          }} />}</p>
        <p>{valueShortener(comments)} <AiOutlineComment /></p>
      </div>
    </div>
  )
}

export default Post