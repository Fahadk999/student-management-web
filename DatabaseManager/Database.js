export default class DataBase {
constructor () {
    this.db = null;
}
async init () {
    if (this.db) return;
    const SQL = await initSqlJs({
        locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
    });
    this.db = new SQL.Database();
}
Execute (query) {
    if (!this.db) throw new Error("Database not init yet!");
    this.db.run(query);
}
GetData (query, constraints = []) {
    if (!this.db) throw new Error("Database not init yet!");
    const statement = this.db.prepare(query);
    statement.bind(constraints);
    let rows = [];
    while (statement.step()) {
        rows.push(statement.getAsObject());
    }
    statement.free();
    return rows;
}
SetData (query, constraints = []) {
    if (!this.db) throw new Error("Database not init yet!");
    const statement = this.db.prepare(query);
    statement.bind(constraints);
    statement.run();
    statement.free();
}
};