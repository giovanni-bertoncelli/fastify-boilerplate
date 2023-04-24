module.exports = {
  dbConnectionString: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  mailer: {
    from: process.env.MAILER_FROM,
    host: process.env.MAILER_TRANSPORT_HOST,
    port: process.env.MAILER_TRANSPORT_PORT,
    secure: process.env.MAILER_TRANSPORT_SECURE,
    user: process.env.MAILER_TRANSPORT_USER,
    psw: process.env.MAILER_TRANSPORT_PSW
  }
}