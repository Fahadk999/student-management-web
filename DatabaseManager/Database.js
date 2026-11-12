const Database = require("better-sqlite3");

export class DataBase {

constructor (dbName) {
    this.dbName = dbName;
    this.db = new Database(dbName)
}

Execute (query) {
    this.db.exec(query);
}
GetData (query, constraints) {
    console.log(this.db.prepare(query).get(constraints));
}
};