import { PostContainer } from "./styles";

export interface PostProps {
  title: string;
  content: string;
}

export function Post({ title, content }: PostProps) {
  return (
    <PostContainer>
      <h2>{title}</h2>
      <p>{content}</p>
    </PostContainer>
  );
}
