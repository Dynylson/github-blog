import { useForm } from "react-hook-form";
import { SearchContainer, SearchForm } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePosts } from "../../../../contexts/PostsContext";

const searchContentSchema = z.object({
  query: z.string(),
});

type SearchContentInputs = z.infer<typeof searchContentSchema>;

export function Search() {
  const { posts, fetchPosts } = usePosts();

  const { handleSubmit, register, reset } = useForm<SearchContentInputs>({
    resolver: zodResolver(searchContentSchema),
  });

  function handleSearchContent(data: SearchContentInputs) {
    fetchPosts(data.query);
    reset();
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchContent)}>
      <div className='posts'>
        <h2>Publicações</h2>
        <p>{posts.length} publicações</p>
      </div>
      <SearchForm>
        <input
          {...register("query")}
          type='text'
          placeholder='Buscar conteúdo'
        />
      </SearchForm>
    </SearchContainer>
  );
}
