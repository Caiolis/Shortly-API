import { db } from "../database/database.connection.js";

export function createUrlsFields(oldUrl, shortUrl, userID) {
  return db.query(
    `INSERT INTO urls (url, short_url, user_id) VALUES ($1, $2, $3)`,
    [oldUrl, shortUrl, userID]
  );
}

export function getShortUrl(url) {
  return db.query(`SELECT id, short_url FROM urls WHERE short_url=$1`, [url]);
}

export function getShortUrlWithCount(url) {
  return db.query(`SELECT id, url, visit_count FROM urls WHERE short_url=$1`, [
    url,
  ]);
}

export function getShortUrlById(id) {
  return db.query(`SELECT id, short_url, url FROM urls WHERE id=$1`, [id]);
}

export function updateCount(count, id) {
  db.query(`UPDATE urls SET visit_count=$1 WHERE id=$2`, [count, id]);
}

export function selectUserId(id) {
  return db.query(`SELECT user_id FROM urls WHERE id=$1;`, [id]);
}

export function deleteUrlById(id) {
  return db.query(`DELETE FROM urls WHERE id=$1;`, [id]);
}

export function selectAll(userID) {
  return db.query(
    `SELECT id, short_url, url, visit_count FROM urls WHERE user_id=$1;`,
    [userID]
  );
}
