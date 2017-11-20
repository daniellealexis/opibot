module.exports = {
  client: 'mysql',
  connection: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    database: 'opibot'
  }
}
