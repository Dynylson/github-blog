import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 100%;
  background-color: ${(props) => props.theme["black-300"]};
  padding: 2rem 2.5rem;
  height: 13.25rem;
  margin-top: -5.25rem;
  border-radius: 10px;
`;

export const ProfileDataContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`;

export const ProfileDataContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .name-github {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      color: ${(props) => props.theme["blue-100"]};
      font-size: 0.8rem;
      font-weight: bold;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme["blue-100"]};
        transition: 0.3;
      }
    }
  }

  .user-bio {
    color: ${(props) => props.theme["gray-300"]};
  }

  .user-stats {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
    color: ${(props) => props.theme["gray-200"]};
  }

  .user-stats li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;
