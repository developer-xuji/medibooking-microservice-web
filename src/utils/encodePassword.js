const ENCRYPTION_STRENGTH = 10;
const encodePassword = (password) => {
  const bcrypt = require("bcryptjs");
  const salt = bcrypt.genSaltSync(ENCRYPTION_STRENGTH);
  const code = bcrypt.hashSync(password, salt);

  return code;
};

export default encodePassword;
