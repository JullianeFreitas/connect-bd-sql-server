const config = {
    server: process.env.SERVER,
    database: "SM_v1",
    requestTimeout: 60000,
    options: {
      encrypt: true,
      trustServerCertificate: false,
    },
    port: 1433,
    authentication: {
      //type: "azure-active-directory-password",
      options: {
        userName: process.env.USER,
        password: process.env.PASSWORD,
      },
    },
  };

  module.exports = config;
