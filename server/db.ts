import pg from "pg";
import "dotenv/config";
const { Pool } = pg;

const client = new Pool({
  password: process.env.PGPASSWORD,
  user: process.env.PGUSER,
  port: parseInt(process.env.PGPORT || "5432"),
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
});

export default client;
