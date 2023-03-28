import pool from "../sql/connection.js";

const getPrompt = async (req, res) => {
  const { seed, offset } = req.query;

  const sql = `SELECT * FROM sipsip.prompts ORDER BY RAND(${seed}) LIMIT ${offset},1;`;

  try {
    const results = await sqlQueryProm(sql);
    return res.json(results[0]);
  } catch (err) {
    console.log(err);
  }
};

const sqlQueryProm = (sql) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export { getPrompt };
