import { nanoid } from "nanoid";

// Repositories
import { createUrlsFields, getShortUrl, getShortUrlById, getShortUrlWithCount, updateCount } from "../repository/urls.repository.js";
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
};

export async function openUrl(req, res) {
  const { shortUrl } = req.params;

  try {
    const query = await getShortUrlWithCount(shortUrl);
    if (query.rows.length === 0) return res.status(404).send('Url was not found');

    let count = query.rows[0].visit_count + 1;
    await updateCount(count, query.rows[0].id)

    res.redirect(200, query.rows[0].url)
  } catch (err) {
    res.status(500).send(err.message);
  };
};