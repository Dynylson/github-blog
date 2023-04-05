import styled from "styled-components";

export const PostContainer = styled.div`
  background: ${(props) => props.theme["black-100"]};
  border-radius: 10px;
  padding: 2rem;

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme["gray-300"]};
  }
`;
