import { HeaderContainer } from "./styles";
import githubLogo from "../../assets/github-blog-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={githubLogo} alt='' />
        <h1>GITHUB BLOG</h1>
      </div>
    </HeaderContainer>
  );
}
