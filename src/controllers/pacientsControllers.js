import pacientsServices from "../services/pacientsServices.js";

async function registerPacient(req, res, next) {
  const { name, cpf, payerName, payerCpf } = req.body;

  const { id } = res.locals.user;
  try {
    await pacientsServices.create({ name, cpf, payerName, payerCpf, userId: id });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function listPacients(req, res, next) {
  const { id } = res.locals.user;
  try {
    const pacients = await pacientsServices.findAll(id);
    return res.send(pacients);
  } catch (err) {
    next(err);
  }
}

async function deletePacient(req, res, next) {
  const { id } = res.locals.user;
  const pacientId = req.params.id;

  try {
    const message = await pacientsServices.deleteById(id, pacientId);
    return res.send(message);
  } catch (err) {
    next(err);
  }
}

export default { registerPacient, listPacients, deletePacient };
