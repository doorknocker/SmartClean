import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Tabular from "./pages/Tabular";
import NotFound from "./pages/NotFound";
import Charts from "./pages/Charts";

import store from "./store";
import interceptor from "./requests/interceptor";

import GlobalStyle from "./styles/globalStyles";
import { theme as styledTheme } from "./styles/theme";

interceptor(store);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/tabular">
            <Tabular />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
