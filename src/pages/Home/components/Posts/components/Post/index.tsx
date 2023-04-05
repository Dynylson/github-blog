import { PostContainer } from "./styles";

export interface PostProps {
  id?: number;
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
