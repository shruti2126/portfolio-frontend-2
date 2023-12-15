/** @format */

import { initialProgressState } from "../state/initialProgressState";

const progressReducer = (progressState, action) => {
  switch (action.type) {
    case "SUBMIT":
      return { ...initialProgressState, submitting: true };
    case "ERRORS":
      return { ...initialProgressState };
    case "SHOW_PROGRESS":
      return { ...initialProgressState, submitting: true, showProgress: true };
    case "PROMISE_RESOLVED":
      return { ...initialProgressState, submissionStatus: 1 };
    case "PROMISE_REJECTED":
      return { ...initialProgressState, submissionStatus: 0 };
    default:
      return progressState;
  }
};

export default progressReducer;
