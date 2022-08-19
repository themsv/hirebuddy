export const validateEmail = (email) => {
  if (email === "" || email == null) {
    return "Email is required";
  } else if (!email.includes("@ps.com")) {
    return "Email is not valid";
  } else {
    return null;
  }
};

export const validateOTP = (otp) => {
  if (otp === "" || otp == null) {
    return "OTP is required";
  } else if (otp.length !== 4 || !/^\d+/.test(otp)) {
    return "OTP not valid";
  } else {
    return null;
  }
};
