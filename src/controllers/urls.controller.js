import { nanoid } from "nanoid";

// Repositories
import { createUrlsFields, getShortUrl, getShortUrlById } from "../repository/urls.repository.js";
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

export async function getUrlById(req, res) {
  const { id } = req.params;
  
  try {
    const query = await getShortUrlById(id);
    if (query.rows.length === 0) return res.status(404).send('Url does not exist');

    const result = {
      id: query.rows[0].id,
      shortUrl: query.rows[0].short_url,
      url: query.rows[0].url
    };

    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err.message);
  }
}