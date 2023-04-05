import { useEffect, useState } from "react";
import { Post, PostProps } from "./components/Post";
import { PostsContainer } from "./styles";
import { api } from "../../../../lib/axios";

export function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  async function fetchPosts() {
    const response = await api.get("http://localhost:3000/posts");

    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContainer>
      {posts?.map(({ title, content }) => {
        return <Post title={title} content={content} />;
      })}
    </PostsContainer>
  );
}
