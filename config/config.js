module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "1234",
  DB: "news_website",
  dialect: "mysql",
  port: 3000,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};