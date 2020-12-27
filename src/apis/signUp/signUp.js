import authInstance from "../../lib/authInstance";
import addPatient from "../../utils/addPatient";
import encodedPassword from "../../utils/encodePassword";
import Login from "../logIn";

const signUp = (data) => {
  const { username, password, firstName, lastName, gender, age } = data;
  const account = {
    username: username,
    encodedPassword: encodedPassword(password),
  };

  return authInstance.post("/register", account).then((response) => {
    if (response.data.id) {
      const accountId = response.data.id;
      return Login({ username: username, password: password }).then(
        (response) => {
          const patient = {
            accountId: accountId,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
          };
          return addPatient(patient);
        }
      );
    }
  });
};

export default signUp;
