import bcrypt from "bcrypt";

// Repositories
import { createUser, verifyEmail } from "../repository/user.repository.js";
import {
  createSession,
  searchSession,
  updateSession,
} from "../repository/sessions.repository.js";

export function signup(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const hash = bcrypt.hashSync(password, 10);

    createUser({
      name,
      email,
      password: hash,
    });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function signin(req, res) {
  const { email, password } = req.body;

  try {
    // Verify if the user has logged before
    // If so then overwrite the current token with the new one
    const userInformation = await verifyEmail(email);
    const hasLogged = await searchSession(userInformation.rows[0].id);
    if (hasLogged.rows.length > 0) {
      const newToken = updateSession(userInformation.rows[0].id);
      return res.status(200).send(newToken);
    }

    const token = await createSession(userInformation.rows[0].id);

    res.status(200).send(token);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
