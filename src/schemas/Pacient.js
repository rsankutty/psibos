import joi from "joi";

export const pacientSchemma = joi.object({
  name: joi.string().min(2).required(),
  cpf: joi.string().required(),
  payerName: joi.required(),
  payerCpf: joi.required(),
});
