import { Post } from "../../../../contexts/PostsContext";
import { PostContentContainer } from "./styles";

interface PostContentProps {
  postData: Post;
}

export function PostContent({ postData }: PostContentProps) {
  return (
    <PostContentContainer>
      <p>{postData.content}</p>
    </PostContentContainer>
  );
}
