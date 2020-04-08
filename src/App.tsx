import React from 'react';
import { ThemeProvider } from 'styled-components'
import "./App.css";
import LandingPage from "./layouts/LandingPage";
import ProjectPage from './layouts/ProjectPage'
import BlogPage from "./layouts/BlogPage";

import ThemingLayout from './theming/ThemingLayout'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavigation from './components/navigation/TopNavigation'
// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  far,
  faAngleUp,
  faAngleDoubleUp,
} from "@fortawesome/pro-regular-svg-icons";
import {
  fal,
  faCode,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/pro-light-svg-icons';

library.add(fab, faGithub, faLinkedin, faLinkedinIn, faGithubAlt);
library.add(far, faAngleUp, faAngleDoubleUp);
library.add(fal, faCode, faAngleLeft, faAngleRight);

const theme = {
  colors: {
    primary: "#EF770E",
    secondary: "#2E294E",
    background: "#272D2D",
    white: "#EAEAEA",
  },
  fonts: {
    headingFamily: `'Montserrat', sans-serif;`,
    bodyFamily: `'Open Sans', sans-serif;`,
    h1Size: "2.5em",
    h2Size: "1.25em",
    bodySize: "1em",
    bodyTitleSize: "1.3em",
    regular: 400,
    black: 900,
    bold: 700,
  },
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    large: 1200,
    wideScreen: 1920
  },
};



const App =() => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <TopNavigation />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/theme" component={ThemingLayout} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
