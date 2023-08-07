import { nanoid } from "nanoid";

// Repositories
import { createUrlsFields, getShortUrl } from "../repository/urls.repository.js";
import { searchSessionByToken } from "../repository/sessions.repository.js";

export async function shortUrl(req, res) {
  const { url } = req.body;
  const short_url = nanoid();
  
  try {
    const user = await searchSessionByToken(res.locals.token);
    await createUrlsFields(url, short_url, user.rows[0].user_id);

    const result = await getShortUrl(short_url);
    res.status(201).send({
      "id": result.rows[0].id,
      "shortUrl": result.rows[0].short_url,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};