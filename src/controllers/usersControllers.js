import usersServices from "../services/usersServices.js";

async function signup(req, res, next) {
  const { email, password } = req.body;
  try {
    await usersServices.signUp({ email, password });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function signin(req, res, next) {
  const { email, password } = req.body;
  try {
    const token = await usersServices.signIn({ email, password });
    return res.send({ token });
  } catch (err) {
    next(err);
  }
}

export default {
  signup,
  signin,
};
