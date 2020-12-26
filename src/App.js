import React from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ROUTES } from "./routes";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { HOME_BACKGROUND } from "./constants";
import { NAVIGATION_GAP } from "./constants";

const Layout = styled.div`
  line-height: 1.25;
  background: url(${HOME_BACKGROUND});
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: ${NAVIGATION_GAP};
`;

const App = () => {
  return (
    <Router>
      <Layout>
        <Navigation />
        {ROUTES.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            exact
            component={route.page}
          />
        ))}
        <Footer />
      </Layout>
    </Router>
  );
};
export default App;
