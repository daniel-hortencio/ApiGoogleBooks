import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import theme from "styles/theme";
import GlobalStyle from "styles/global";

import { SearchResultsProvider } from "contexts/SearchResults";
import { SearchProvider } from "contexts/Search";

import "../styles/fonts.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <SearchResultsProvider>
      <SearchProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </SearchProvider>
    </SearchResultsProvider>
  );
}

export default App;
