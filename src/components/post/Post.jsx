import React from "react";
import styles from "./style.module.scss";
import { AiFillLike, AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { valueShortener } from "../../utils/utils";

function Post({ post, disable = false }) {
  const {
    name = 'vidhanshu borade',
    avatar = '',
    image,
    text = '',
    date = '2020-01-01 at 10:00pm',
    likes = 0,
    comments = 0,
    id = 1
  } = post;
  const [liked, setLiked] = React.useState(false);
  const [likesCount, setLikes] = React.useState(likes);

  return (
    <div className={styles.postContainer}>
      {/* post header */}
      <div className={styles.postHeader}>
        <Link to={`/profile/${id}`}>
          <img src={avatar} alt="" />
        </Link>
        <div className={styles.postOwnerInfo}>
          <Link to={`/profile/${id}`}>
            <h3>{name}</h3>
          </Link>
          <p>{date}</p>
        </div>
      </div>
      {/* post description */}
      <div className={styles.postDescription}>
        <p dangerouslySetInnerHTML={
          {
            __html: text
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