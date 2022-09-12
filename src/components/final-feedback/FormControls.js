import { useState } from "react";

const PostContactForm = async (values, successCallback, errorCallback) => {
  // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
};

export const useFormControls = (props) => {
  const [values, setValues] = useState(props);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("relaventExperience" in fieldValues) {
      temp.relaventExperience = fieldValues.relaventExperience
        ? ""
        : "This field is required.";
      if (fieldValues.relaventExperience) {
        temp.relaventExperience =
          fieldValues.relaventExperience < 0 ||
          fieldValues.relaventExperience > 99
            ? "Experience must be within 0 and 99"
            : "";
      }
    }

    if ("recommendedCareerStage" in fieldValues)
      temp.recommendedCareerStage = fieldValues.recommendedCareerStage
        ? ""
        : "This field is required.";
    if ("outcome" in fieldValues)
      temp.outcome = fieldValues.outcome ? "" : "Please select outcome";

    if ("feedback" in fieldValues) {
      temp.feedback = fieldValues.feedback ? "" : "Please provide feedback";
      if (fieldValues.feedback) {
        temp.feedback =
          fieldValues.feedback.length < 50
            ? "Feedback must be minimum of 50 characters"
            : "";
      }
    }

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    const _value =
      name === "feedback" ? value.replace(/[^\w.\s]/gi, "") : value;
    setValues({
      ...values,
      [name]: _value,
    });
    validate({ [name]: _value });
  };

  const handleSuccess = () => {
    setValues({
      ...values,
      formSubmitted: true,
      success: true,
    });
  };

  const handleError = () => {
    setValues({
      ...values,
      formSubmitted: true,
      success: false,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.relaventExperience &&
      fieldValues.recommendedCareerStage &&
      fieldValues.feedback &&
      fieldValues.outcome &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};
