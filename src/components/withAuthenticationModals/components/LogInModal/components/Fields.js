import validator from "validator";

const Fields = [
  {
    key: "username",
    label: "Username",
    type: "text",
    placeholder: "Username",
    validations: [
      {
        message: "Please enter you username",
        validator: (value) => !validator.isEmpty(value),
      },
    ],
  },
  {
    key: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    validations: [
      {
        message: "Please enter you password",
        validator: (value) => !validator.isEmpty(value),
      },
    ],
  },
];

export default Fields;
