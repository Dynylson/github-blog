import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  .posts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    h2 {
      font-size: 1.125rem;
      font-weight: bold;
    }

    p {
      color: ${(props) => props.theme["gray-500"]};
      font-size: 0.875rem;
    }
  }
`;

export const SearchForm = styled.form`
  display: flex;

  input {
    flex: 1;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme["gray-700"]};
    background: ${(props) => props.theme["black-700"]};
    border: 0;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["gray-900"]};
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme["blue-100"]};
  }

  input::placeholder {
    color: ${(props) => props.theme["gray-700"]};
  }
`;
