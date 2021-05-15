import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "styles/theme";
import GlobalStyle from "styles/global";

import { SearchKeyWordsProvider } from "../contexts/SearchKeyWords";

import "../styles/fonts.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <SearchKeyWordsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SearchKeyWordsProvider>
  );
}

export default App;
