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
  comments: number;
  createdAt: string;
}

interface PostsContextType {
  posts: Post[];
  fetchPosts: (query?: string) => Promise<void>;
}

interface PostsProviderProps {
  children: ReactNode;
}

const PostsContext = createContext({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts(query?: string) {
    const response = await api.get("http://localhost:3000/posts", {
      params: {
        q: query,
      },
    });

    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}
