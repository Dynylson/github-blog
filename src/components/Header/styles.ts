import styled from "styled-components";
import headerBg from "../../assets/headerBg.png";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${headerBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 18.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    color: ${(props) => props.theme["blue-100"]};
    margin-bottom: 1.625rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;
