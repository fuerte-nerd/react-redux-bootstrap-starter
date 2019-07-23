import { EXAMPLE_ACTION } from "./actionTypes";

export const updateText = text => dispatch => {
  dispatch({
    type: EXAMPLE_ACTION,
    payload: {
      text
    }
  });
  return Promise.resolve();
};
