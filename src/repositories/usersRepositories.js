import connectionDb from "../config/database.js";

async function findByEmail(email) {
  return await connectionDb.query(
    `    
    SELECT * FROM users WHERE email=$1
  `,
    [email]
  );
}

async function create({ email, password }) {
  await connectionDb.query(
    `
        INSERT INTO users ( email, password)
        VALUES ($1, $2)
    `,
    [email, password]
  );
}


async function findById(id) {
  return await connectionDb.query(
    `    
    SELECT * FROM users WHERE id=$1
  `,
    [id]
  );
}

export default {
  findByEmail,
  create,
  findById,
};
