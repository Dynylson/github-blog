import { useParams } from "react-router-dom";
import { Post } from "../../contexts/PostsContext";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { PostContainer } from "./styles";
import { PostHeader } from "./components/PostHeader";
import { PostContent } from "./components/PostContent";

export function Post() {
  const [postData, setPostData] = useState<Post>({} as Post);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  async function fetchPost() {
    try {
      const response = await api.get(`http://localhost:3000/posts/${id}`);

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <PostContainer>
      <PostHeader isLoading={isLoading} postData={postData} />
      <PostContent postData={postData} />
    </PostContainer>
  );
}
