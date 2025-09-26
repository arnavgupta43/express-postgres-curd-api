const pool = require("../config/db");

const getAllUserService = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

const getUserByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM USERS where id=$1", [id]);
  return result.rows[0];
};
const createUser = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO users (name,email) VALUES ($1,$2) RETURNING * ",
    [name, email]
  );
  return result.rows[0];
};

const updateUserService = async (id, name, email) => {
  const result = await pool.query(
    "UPDATE users SET name=$1, email=$2 where id=$3 RETURNING *",
    [name, email, id]
  );
  return result.rows[0];
};

const deleteUserService = async (id) => {
  const result = await pool.query("DELETE from users where id=$1 RETURNING *", [
    id,
  ]);
  return result.rows[0];
};
module.exports = {
  getAllUserService,
  getUserByIdService,
  createUser,
  updateUserService,
  deleteUserService,
};
