import styled from "styled-components";

export const PostContentContainer = styled.div`
  margin-top: 2.5rem;
  padding: 0 2rem;

  p {
    color: ${(props) => props.theme["gray-300"]};
  }
`;
