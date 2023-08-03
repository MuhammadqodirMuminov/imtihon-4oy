import { resolve } from "path";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "john.db.elephantsql.com",
  port: 5432,
  username: "lcsnpqqo",
  password: "w4-NTsxKC-pV0N7mJIJtSq2dN5ZWehWE",
  database: "lcsnpqqo",
  entities: [resolve(__dirname, "..", "entity", "*.entity.{ts,js}")],
  synchronize: true
});

export default AppDataSource;
