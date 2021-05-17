import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "styles/theme";
import GlobalStyle from "styles/global";

import { SearchResultsProvider } from "contexts/SearchResults";
import { SearchKeyWordsProvider } from "contexts/SearchKeyWords";

import "../styles/fonts.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <SearchResultsProvider>
      <SearchKeyWordsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </SearchKeyWordsProvider>
    </SearchResultsProvider>
  );
}

export default App;
