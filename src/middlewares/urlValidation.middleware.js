import { searchSessionByToken } from "../repository/sessions.repository.js";
import { selectUserId } from "../repository/urls.repository.js";

export async function validateURL(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');
  if(!token) return res.status(401).send("You are not allowed to do this");
  try {
    const session = await searchSessionByToken(token);
    if(session.rows.length === 0) return res.status(401).send("You are not allowed to do this");
 
   res.locals.token = token;
    
    next();
  } catch (err) {
    res.status(500).send(err.message);
  }

};

export async function validateAdminUrl(req, res, next) {
  try {
    const query = await selectUserId(req.params.id);
    const session = await searchSessionByToken(res.locals.token);

    if(query.rows.length === 0) return res.status(404).send('URL was not found');
    if(query.rows[0].user_id !== session.rows[0].user_id) return res.status(401).send("You are not allowed to do this");

    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
};