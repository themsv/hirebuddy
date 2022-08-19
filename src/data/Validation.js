export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const DOMAIN_REGEX =
  /^((?!-)[a-z0-9](?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.))+[a-z]{2,}$/;

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export const required = (errorMsg) => (value) =>
  value && String(value).trim() ? undefined : errorMsg || "Required";

export const numberRequired = (errorMsg) => (value) =>
  /^\d+/.test(value) ? undefined : errorMsg || "Required";

export const alphaNumeric = (errorMsg) => (value) =>
  /^[0-9a-zA-Z]+$/.test(value)
    ? undefined
    : errorMsg || "Only alphabets and numbers are allowed";

export const gstNumber = (errorMsg) => (value) =>
  /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
    value?.toUpperCase()
  )
    ? undefined
    : errorMsg || "Please enter a valid GST number";

export const validateEmail = (errorMsg) => (rawValue) => {
  const value = rawValue?.trim();
  return EMAIL_REGEX.test(String(value).toLowerCase())
    ? undefined
    : errorMsg || "Invalid email";
};

export const bankAccountNumber = (errorMsg) => (value) =>
  /^\d{9,18}$/.test(value)
    ? undefined
    : errorMsg || "Please enter a valid account number";

export const urlValidation = (errorMsg) => (value) =>
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/.test(
    value
  )
    ? undefined
    : errorMsg || "Please enter a valid URL";

export const smallUrlValidation = (errorMsg) => (value) =>
  /(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,16}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/.test(
    value
  )
    ? undefined
    : errorMsg || "Please enter a valid URL";

export const lengthValidation = (value, len, msg) => {
  if (value) {
    return value.length === len ? undefined : msg;
  }
  return undefined;
};

export const minLengthValidation = (value, len, msg) => {
  if (value) {
    return value.length >= len ? undefined : msg;
  }
  return undefined;
};

export const maxLengthValidation = (value, len, msg) => {
  if (value) {
    return value.length <= len ? undefined : msg;
  }
  return undefined;
};

export const minMaxLengthValidation = (min, max) =>
  composeValidators(
    required("This field is required"),
    (value) => minLengthValidation(value, min, "Please enter a valid value"),
    (value) => maxLengthValidation(value, max, "Please enter a valid value")
  );

export const optionalMinMaxLengthValidation = (min, max) =>
  composeValidators(
    (value) => minLengthValidation(value, min, "Please enter a valid value"),
    (value) => maxLengthValidation(value, max, "Please enter a valid value")
  );

export const mobileValidation = (min, max) =>
  composeValidators(
    required("Mobile number is required"),
    (value) =>
      minLengthValidation(value, min, "Please enter a valid mobile number"),
    (value) =>
      maxLengthValidation(value, max, "Please enter a valid mobile number")
  );

export const validateNumber = (min = 0, max = Number.MAX_SAFE_INTEGER) =>
  composeValidators(required("This field is required"), (value) => {
    if (value <= min) {
      return `Number is less than ${min}`;
    }
    if (value > max) {
      return `Number is more than ${max}`;
    }
  });

export const minLength = (min) =>
  composeValidators(required(`Minimum length is ${min}`), (value) =>
    minLengthValidation(value, min, `Minimum length is ${min}`)
  );

export const isValidEmail = (rawValue = "") => {
  const value = rawValue?.trim();
  return EMAIL_REGEX.test(String(value.toLowerCase()));
};

export const emptyValidateEmail = (errorMsg) => (value) => {
  const validation = validateEmail(errorMsg);
  if (value) {
    return validation(value);
  }
  return undefined;
};

export const checkIsPhone = (value) => !(Number.isNaN(Number(value)) || !value);

export const minValidation = (max) => (value) => Number(value) < Number(max);

export const maxValidation = (min) => (value) => Number(value) > Number(min);

export const amazonFieldValidation = (errorMsg) => (value) =>
  value && value.includes("https://www.amazon.")
    ? undefined
    : errorMsg || "Required";

export const duplicateDukaanProductFieldValidation =
  (errorMsg) => (value, values) => {
    const productIdsExceptDuplicatesAndTheirOriginals = values.items
      .map((item) => item.dukaan.productId)
      .filter((id) => id)
      .filter((a, _, aa) => aa.indexOf(a) === aa.lastIndexOf(a));

    return value &&
      productIdsExceptDuplicatesAndTheirOriginals.includes(value.productId)
      ? undefined
      : errorMsg || "Required";
  };

export const optionalField =
  ({ errMsg = "", validateFn }) =>
  (value) => {
    if (!value) return undefined;
    if (validateFn()(value) !== undefined) return errMsg || validateFn()(value);
  };

export const deliveryTimeValidation = (errorMsg) => (value) =>
  /[0-9]*|[\\-]{1}[0-9]+$/.test(value)
    ? undefined
    : errorMsg || "Please enter a delivery time";

export const domainValidation = (errorMsg) => (value) =>
  DOMAIN_REGEX.test(String(value).toLowerCase())
    ? undefined
    : errorMsg || "Invalid domain";

export const checkYoutubeOrVimeoLink = (value) =>
  /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|shorts\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(
    value
  );

export default {
  required,
  composeValidators,
  mobileValidation,
  minValidation,
  maxValidation,
  alphaNumeric,
  gstNumber,
  bankAccountNumber,
  minLength,
  validateEmail,
  minMaxLengthValidation,
  maxLengthValidation,
  minLengthValidation,
  urlValidation,
  smallUrlValidation,
  numberRequired,
  validateNumber,
  optionalMinMaxLengthValidation,
  checkIsPhone,
  emptyValidateEmail,
  httpUrlValidation,
  optionalField,
  deliveryTimeValidation,
  domainValidation,
};
