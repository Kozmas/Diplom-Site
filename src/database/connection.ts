
const { Client } = require('pg')


export default class db {
  protected client = null;

  constructor() {
    this.client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'andersen',
      password: '1',
      port: 5432,
    });
    // @ts-ignore
    this.client.connect();
  }


  dbQuery(sql: string, values: any = "") {

    // @ts-ignore
    return this.client.query(sql, values)
      .then((res: any) => {
        if (res.error) throw new Error(res);
        return res.rows;
      })
  }
}

