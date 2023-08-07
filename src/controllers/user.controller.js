import bcrypt from "bcrypt";

// Repositories
import { createUser } from "../repository/user.repository.js";

export async function signup(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const hash = bcrypt.hashSync(password, 10)

    createUser({
      name,
      email,
      password: hash
    })
    res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err.message);
  };
};