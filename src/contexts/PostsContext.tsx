import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

export interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostsContextType {
  posts: Post[];
}

interface PostsProviderProps {
  children: ReactNode;
}

const PostsContext = createContext({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    const response = await api.get("http://localhost:3000/posts");

    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}
