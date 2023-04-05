import styled from "styled-components";

export const PostHeaderContainer = styled.div`
  min-height: 10.5rem;
  margin-top: -5.25rem;
  background: ${(props) => props.theme["black-300"]};
  border-radius: 10px;
  padding: 2rem 3.25rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      color: ${(props) => props.theme["blue-100"]};
      font-size: 0.75rem;
      font-weight: bold;
    }
  }

  h2 {
    color: ${(props) => props.theme["gray-100"]};
    margin-top: 1.25rem;
  }
`;
