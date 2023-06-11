import joi from "joi";

export const userSchemma = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
