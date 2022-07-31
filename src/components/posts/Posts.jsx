import Post from "../post/Post";
import styles from "./style.module.scss";

function Posts({ posts, className }) {
  return (
    <div className={`${styles.postsContainer} ${className}`}>
      {
        posts.reverse().map((post, index) => {
          return <Post key={index} post={post} />
        })
      }
    </div>
  )
}

export default Posts