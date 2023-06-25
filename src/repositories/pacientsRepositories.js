import connectionDb from "../config/database.js";

async function create({ name, cpf, payerName, payerCpf, userId }) {
  await connectionDb.query(
    `
        INSERT INTO pacients (name, cpf, payer_name, payer_cpf, userid)
        VALUES ($1, $2, $3, $4, $5)
        `,
    [name, cpf, payerName, payerCpf, userId]
  );
}

async function findByCpf(cpf) {
  return await connectionDb.query(
    `
        SELECT * FROM pacients WHERE cpf = $1;
    `,
    [cpf]
  );
}

async function findAll(id) {
  return await connectionDb.query(
    `
        SELECT 
          *
        FROM pacients
        WHERE userid = $1;`,
    [id]
  );
}

async function findById(id, pacientId) {
  return await connectionDb.query(
    `
        SELECT 
          *
        FROM pacients
        WHERE userid = $1 AND id= $2
        ;`,
    [id, pacientId]
  );
}

async function deleteById(id, pacientId) {
  return await connectionDb.query(
    `
    DELETE FROM pacients
    WHERE userid = $1 AND id= $2
    ;`,
    [id, pacientId]
  );
}


export default {
  create,
  findByCpf,
  findAll,
  deleteById,
  findById
};
