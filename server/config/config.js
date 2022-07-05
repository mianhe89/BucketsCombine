require("dotenv").config();
console.log("똑바로 말해라", process.env.DATABASE_HOST);
module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME, //DATABASE이름
    dialect: "mysql", // 무슨 시스템을 쓰는지
    port: process.env.DATABASE_HOST,
  },
  test: {
    username: "admin",
    password: "12345678",
    database: "test",
    host: "bucketscombinetestdb.cj7o0vikegq1.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    port: "13305",
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
};
