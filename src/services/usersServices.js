import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import usersRepositories from "../repositories/usersRepositories.js";
import errors from "../errors/index.js";

async function signUp({ email, password }) {
  const { rowCount } = await usersRepositories.findByEmail(email);
  if (rowCount) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await usersRepositories.create({ email, password: hashPassword });
}

async function signIn({ email, password }) {
  const {
    rowCount,
    rows: [user],
  } = await usersRepositories.findByEmail(email);
  if (!rowCount) throw errors.invalidCredentialsError();

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw errors.invalidCredentialsError();

  const token = jwt.sign({ userId: user.id }, process.env.SECRET_JWT, { expiresIn: 86400 });
  return token;
}

export default {
  signUp,
  signIn,
};
