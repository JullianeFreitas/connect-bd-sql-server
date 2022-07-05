require("dotenv/config");
const sql = require("mssql");
const config = require( "./config" );


consultar("select top 1 * from usuario");

async function connectPool() {
  try {
    console.log(config)
    const pool = new sql.ConnectionPool(config);
    const conn = pool.connect();
    return conn;
  } catch (err) {
    msgErro = "[ERROR] Erro ao conectar na base: " + err;
    console.error(msgErro);
    
  }
};

async function consultar(query) {
  /**CONEXÃO À BASE DE DADOS */
  let connection = await connectPool();

  //REALIZANDO CONSULTA
  if (connection != undefined) {
    try {
      console.log(
        "======================================================================"
      );
      console.log("CONSULTA");
      console.log(query);
      let result = await connection.request().query(query);
      console.log(result.recordsets);
      return result.recordsets;
    } catch (err) {
      msgErro = "[ERROR] Erro ao realizar a consulta: " + err;
      console.error(msgErro);
    }
  }
  console.log(
    "======================================================================"
  );
}




