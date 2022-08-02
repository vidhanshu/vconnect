import Post from "../post/Post";
import styles from "./style.module.scss";
import { useGlobalContext } from "../../context/useGlobalContext";

function Posts({ posts, className }) {
  const { user={} } = useGlobalContext();
  return (
    <div className={`${styles.postsContainer} ${className}`}>
      {
        posts.reverse().map((post, index) => {
          return <Post option={post.owner===user?._id} key={index} post={post} />
        })
      }
    </div>
  )
}

export default Posts