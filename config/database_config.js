module.exports = {
  mysql: {
    base: {
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'crawler_3rd',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    },
  },
}
