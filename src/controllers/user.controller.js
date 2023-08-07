import bcrypt from "bcrypt";

// Repositories
import { createUser, getUserById, sumVisits, verifyEmail } from "../repository/user.repository.js";
import {
  createSession,
  searchSession,
  updateSession,
  searchSessionByToken
} from "../repository/sessions.repository.js";
import { selectAll } from "../repository/urls.repository.js";

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

export async function myInfo(req, res) {

  try {
    const query = await searchSessionByToken(res.locals.token);
    const urlInfo = await selectAll(query.rows[0].user_id);
    const userInfo = await getUserById(query.rows[0].user_id);
    const count = await sumVisits(userInfo.rows[0].id);
    
    const result = {
      "id": userInfo.rows[0].id,
      "name": userInfo.rows[0].name,
      "visitCount": count.rows[0].sum,
      "shortenedUrls": urlInfo.rows
    };

    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err.message);
  }
};