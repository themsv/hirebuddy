import { useState } from "react";

const PostContactForm = async (values, successCallback, errorCallback) => {
  // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
};

const initialFormValues = {
  relaventExperience: "",
  recommendedCareerStage: "",
  outcome: "",
  feedback: "",
  trainable: "",
  trainings: [],
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
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
          fieldValues.relaventExperience > 70
            ? "Experience must be within 0 and 70"
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
          fieldValues.feedback.length < 200
            ? "Feedback must be minimum of 200 characters"
            : "";
      }
    }

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value.replace(/[^\w\s]/gi, ""),
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true,
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
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
