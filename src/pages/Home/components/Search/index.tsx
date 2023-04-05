import { useForm } from "react-hook-form";
import { SearchContainer, SearchForm } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchContentSchema = z.object({
  query: z.string(),
});

type SearchContentInputs = z.infer<typeof searchContentSchema>;

export function Search() {
  const { handleSubmit, register } = useForm<SearchContentInputs>({
    resolver: zodResolver(searchContentSchema),
  });

  function handleSearchContent(data: SearchContentInputs) {
    console.log(data);
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchContent)}>
      <div className='posts'>
        <h2>Publicações</h2>
        <p>6 publicações</p>
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
