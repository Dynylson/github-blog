import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { PostsProvider } from "./contexts/PostsContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </PostsProvider>
    </ThemeProvider>
  );
}

export default App;
