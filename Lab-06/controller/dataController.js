const SqlServerConnection = require("../bin/bd");

module.exports = {
  insertData: async (username, clave) => {
    try {
      this.sqlServerConnection = new SqlServerConnection();
      await this.sqlServerConnection.connect();
      const query = `INSERT INTO usuarios(username, clave) values('${username}', '${clave}')`;
      const rows = await this.sqlServerConnection.executeQuery(query);
      return rows;
    } catch (err) {
      throw err;
    } finally {
      // this.sqlServerConnection.close();
    }
  },
  getData: async () => {
    {
      try {
        this.sqlServerConnection = new SqlServerConnection();
        await this.sqlServerConnection.connect();
        const query = `SELECT [username] ,[clave] FROM [usuarios]`;
        return await this.sqlServerConnection.executeQuery(query);
      } catch (err) {
        throw err;
      } finally {
        // this.sqlServerConnection.close();
      }
    }
  },
};
