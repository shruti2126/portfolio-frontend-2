/** @format */
import { initialContactFormFieldState } from "../state/initialContactFormFieldState";

const contactFormReducer = (formFieldState, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...formFieldState, [action.field]: action.value };
    case "RESET_FIELDS":
      return initialContactFormFieldState;
    default:
      return formFieldState;
  }
};

export default contactFormReducer;
