import { db } from "../database/database.connection.js";

export function createUser(body) {
  return db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [
    body.name,
    body.email,
    body.password,
  ]);
}

export function verifyEmail(email) {
  return db.query(`SELECT * FROM users WHERE email=$1;`, [email]);
}