import { db } from "../database/database.connection.js";

export function createUrlsFields(oldUrl, shortUrl, userID) {
  return db.query(`INSERT INTO urls (url, short_url, user_id) VALUES ($1, $2, $3)`, [oldUrl, shortUrl, userID]);
};

export function getShortUrl(url) {
  return db.query(`SELECT id, short_url FROM urls WHERE short_url=$1`, [url]);
}

export function getShortUrlById(id) {
  return db.query(`SELECT id, short_url, url FROM urls WHERE id=$1`, [id]);
}