import { usePosts } from "../../../../contexts/PostsContext";
import { Post } from "./components/Post";
import { PostsContainer } from "./styles";

export function Posts() {
  const { posts } = usePosts();

  return (
    <PostsContainer>
      {posts?.map(({ id, title, content }) => {
        return <Post key={id} id={id} title={title} content={content} />;
      })}
    </PostsContainer>
  );
}
