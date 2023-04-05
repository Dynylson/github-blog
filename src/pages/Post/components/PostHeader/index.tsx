import { HiExternalLink } from "react-icons/hi";
import { PostHeaderContainer } from "./styles";
import { Post } from "../../../../contexts/PostsContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import { CSSProperties } from "react";

interface PostHeaderProps {
  postData: Post;
  isLoading: boolean;
}

const override: CSSProperties = {
  display: "block",
  margin: "8rem auto",
};

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  return (
    <>
      {!isLoading ? (
        <PostHeaderContainer>
          <header>
            <a href='/'>
              <AiOutlineArrowLeft size={20} /> VOLTAR
            </a>
            <a className='github-link' href='#'>
              VER NO GITHUB <HiExternalLink size={20} />
            </a>
          </header>
          <h2>{postData.title}</h2>
        </PostHeaderContainer>
      ) : (
        <ClipLoader cssOverride={override} color='#3294f8' />
      )}
    </>
  );
}
