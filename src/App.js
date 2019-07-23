import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

import ExampleJumbotron from "./components/ExampleJumbotron";

import { Row, Col } from "reactstrap";
import { Spring } from "react-spring/renderprops";
import { useTrail } from "react-spring";

import ReactLogo from "./static/images/react.svg";
import ReduxLogo from "./static/images/redux.svg";
import BootstrapLogo from "./static/images/bootstrap.svg";

function App() {
  return (
    <Provider store={store}>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div style={props}>
            <div style={logoContainer}>
              <img src={ReactLogo} alt="React logo" style={logos} />
              <img src={ReduxLogo} alt="Redux logo" style={logos} />
              <img src={BootstrapLogo} alt="Bootstrap logo" style={logos} />
            </div>
            <ExampleJumbotron />
          </div>
        )}
      </Spring>
    </Provider>
  );
}

export default App;

const logoContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(25px, 1fr))",
  gridGap: "2rem",
  maxWidth: 600,
  margin: "0 auto",
  padding: "2rem",
  justifyItems: "center"
};

const logos = {
  maxHeight: 80
};
