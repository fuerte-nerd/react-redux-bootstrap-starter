import React from "react";
import { connect } from "react-redux";
import { Container, Button, Jumbotron } from "reactstrap";
import { updateText } from "../redux/actions";
import { useTransition, animated } from "react-spring";

function ExampleJumbotron(props) {
  const handleClick = e => {
    if (e.target.getAttribute("id") === "yes") {
      props.dispatch(updateText("Great!!!"));
    } else {
      props.dispatch(updateText("Aww!!!"));
    }
  };

  const transitions = useTransition(props.exampleText, null, {
    from: { position: "absolute", opacity: 0, transform: "translateX(-300px)" },
    enter: { position: "relative", opacity: 1, transform: "translateX(0px)" },
    leave: { visibility: "hidden" },
    delay: 500000
  });

  return (
    <Jumbotron fluid>
      <Container>
        {transitions.map(({ item, key, props }) => (
          <animated.div style={props} key={key}>
            <h1 className="display-1 font-weight-bold">{item}</h1>
          </animated.div>
        ))}
        <p className="display-4" id="floating-text">Let's get started!</p>
        <p>
          This create-react-app starter comes bundled with Redux, Bootstrap (inc
          jQuery and Popper.js dependencies), Reactstrap and React Spring.
        </p>
        <Button color="primary" id="yes" onClick={handleClick}>
          Yes sir!
        </Button>
        <span className="mx-3">or</span>
        <Button color="secondary" id="no" onClick={handleClick}>
          Nope!
        </Button>
      </Container>
    </Jumbotron>
  );
}

const mapStateToProps = state => {
  return {
    ...state,
    exampleText: state.exampleReducer.text
  };
};

export default connect(mapStateToProps)(ExampleJumbotron);
