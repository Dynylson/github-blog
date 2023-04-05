import { useParams } from "react-router-dom";
import { usePosts } from "../../contexts/PostsContext";

export function Post() {
  const { id } = useParams();

  return <h1>Pagina de Post</h1>;
}
