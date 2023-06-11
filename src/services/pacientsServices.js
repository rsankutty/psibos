import errors from "../errors/index.js";
import pacientsRepositories from "../repositories/pacientsRepositories.js";

async function create({ name, cpf, payerName, payerCpf, userId}) {
  const {
    rows: [pacient],
  } = await pacientsRepositories.findByCpf(cpf);
  if (pacient) throw errors.conflictError("Cpf already registered");

  await pacientsRepositories.create({ name, cpf, payerName, payerCpf, userId});
}

async function findAll(id) {
  const { rows, rowCount } = await pacientsRepositories.findAll(id);
  if (!rowCount) throw errors.notFoundError();
  return rows;
}

export default { create, findAll };
