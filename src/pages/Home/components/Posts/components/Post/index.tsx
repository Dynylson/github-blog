import { Link } from "react-router-dom";
import { PostContainer } from "./styles";

export interface PostProps {
  id: number;
  title: string;
  content: string;
}

export function Post({ id, title, content }: PostProps) {
  return (
    <PostContainer>
      <Link to={`posts/${id}`}>
        <h2>{title}</h2>
        <p>{content}</p>
      </Link>
    </PostContainer>
  );
}
