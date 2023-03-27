const SqlServerConnection = require("../bin/bd");

module.exports = {
  insertPerson: async (
    PersonType,
    NameStyle,
    Title,
    FirstName,
    MiddleName,
    LastName,
    EmailPromotion
  ) => {
    try {
      this.sqlServerConnection = new SqlServerConnection();
      await this.sqlServerConnection.connect();
      const query = `INSERT INTO [Person].[Person](
        [BusinessEntityID]
        ,[PersonType]
        ,[NameStyle]
        ,[Title]
        ,[FirstName]
        ,[MiddleName]
        ,[LastName]
        ,[EmailPromotion]) VALUES(
          ${Math.floor(Math.random() * 1000)}
          ,'${PersonType}'
          ,${NameStyle}
          ,'${Title}'
          ,'${FirstName}'
          ,'${MiddleName}'
          ,'${LastName}'
          ,${EmailPromotion}
          )`;
      console.log(query);
      const rows = await this.sqlServerConnection.executeQuery(query);
      return rows;
    } catch (err) {
      throw err;
    } finally {
      // this.sqlServerConnection.close();
    }
  },
  getPerson: async () => {
    {
      try {
        this.sqlServerConnection = new SqlServerConnection();
        await this.sqlServerConnection.connect();
        const query = `SELECT TOP (1000) [BusinessEntityID]
         [BusinessEntityID]
        ,[PersonType]
        ,[NameStyle]
        ,[Title]
        ,[FirstName]
        ,[MiddleName]
        ,[LastName]
        ,[EmailPromotion]
        FROM [Person].[Person]`;
        return await this.sqlServerConnection.executeQuery(query);
      } catch (err) {
        throw err;
      } finally {
        // this.sqlServerConnection.close();
      }
    }
  },
  insertAddress: async (
    AddressLine1,
    AddressLine2,
    City,
    StateProvinceID,
    PostalCode
  ) => {
    try {
      this.sqlServerConnection = new SqlServerConnection();
      await this.sqlServerConnection.connect();
      const query = `INSERT INTO [Person].[Address](
       [AddressLine1]
      ,[AddressLine2]
      ,[City]
      ,[StateProvinceID]
      ,[PostalCode]) VALUES(
          '${AddressLine1}'
          ,'${AddressLine2}'
          ,'${City}'
          ,${StateProvinceID}
          ,'${PostalCode}'
          )`;
      console.log(query);
      const rows = await this.sqlServerConnection.executeQuery(query);
      return rows;
    } catch (err) {
      throw err;
    } finally {
      // this.sqlServerConnection.close();
    }
  },
  getAddress: async () => {
    {
      try {
        this.sqlServerConnection = new SqlServerConnection();
        await this.sqlServerConnection.connect();
        const query = `SELECT TOP (1000) [AddressID]
        ,[AddressLine1]
        ,[AddressLine2]
        ,[City]
        ,[StateProvinceID]
        ,[PostalCode]
        FROM [AdventureWorks2017].[Person].[Address]`;
        return await this.sqlServerConnection.executeQuery(query);
      } catch (err) {
        throw err;
      } finally {
        // this.sqlServerConnection.close();
      }
    }
  },
};
