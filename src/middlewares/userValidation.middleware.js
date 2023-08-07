import { verifyEmail } from "../repository/user.repository.js";

export async function userValidation(req, res, next) {
  const { name, email, password, confirmPassword } = req.body;
  const isValid = await verifyEmail(email);

  if(password !== confirmPassword) return res.status(422).send("Passwords do not match");
  if(isValid.rows.length !== 0) return res.status(409).send("User already exists");

  next();
};