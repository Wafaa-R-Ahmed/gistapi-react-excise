import { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import { getPublicGists } from "./services/gistService";
import { getGistForUser } from "./services/gistService";
import GistList from "./components/GistList";
import ErrorBoundary from "./components/ErrorBoundary";
import PageNotFound from "./components/PageNotFound";
import NoResults from "./components/NoResults";

const App = () => {
  const [gists, setGists] = useState([]);

  const searchFunction = async (value) => {
    let results = [];
    try {
      results = await getGistForUser(value);
      if (results && results.data) {
        setGists(results.data);
      }
    } catch (err) {
      console.log(err);
      //alert(err);
    }
  };

  const getGists = async () => {
    let results = [];
    try {
      results = await getPublicGists();
      if (results && results.data) {
        setGists(results.data);
      }
    } catch (err) {
      console.log(err);
      //alert(err);
    }
  };

  useEffect(() => {
    getGists();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ErrorBoundary>
            <Wrapper className="App" data-testid="app">
              <Header searchFunction={searchFunction} />
              {gists && gists.length > 0 ? (
                <GistList gists={gists} />
              ) : (
                <NoResults />
              )}
              <GlobalStyles />
            </Wrapper>
          </ErrorBoundary>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
