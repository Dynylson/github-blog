import { SearchContainer, SearchForm } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <div className='posts'>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </div>
      <SearchForm>
        <input type='text' placeholder='Buscar conteúdo' />
      </SearchForm>
    </SearchContainer>
  );
}
