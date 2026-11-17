import DataBase from '../DatabaseManager/Database.js';

export default class Manager {
studentsDB = new DataBase();

MakeTable () {
    const queryOne = `
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER NOT NULL
        );`;
    const queryTwo = `
        CREATE TABLE IF NOT EXISTS marks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER NOT NULL,
            bio INTEGER NOT NULL,
            chem INTEGER NOT NULL,
            phy INTEGER NOT NULL,
            percentage REAL NOT NULL,
            FOREIGN KEY (student_id) REFERENCES students(id)
        );`;
    
    this.studentsDB.Execute(queryOne);
    this.studentsDB.Execute(queryTwo);
}

Insert (userData, marks) {
    const queryOne = `
        INSERT INTO students (name, age) VALUES (?, ?);`;
    this.studentsDB.SetData(queryOne, userData);
    const idResult = this.studentsDB.GetData("SELECT last_insert_rowid() AS id;");
    const studentId = idResult[0].id;
    const queryTwo = `
        INSERT INTO marks (student_id, bio, chem, phy, percentage) VALUES (?, ?, ?, ?, ?);`;
    this.studentsDB.SetData(queryTwo, [studentId, ...marks]);
}

GetAllData () {
    //for now in console
    const queryOne = `
        SELECT * FROM students;`;
    const queryTwo = `
        SELECT * FROM marks;`;

    console.log("Studetns: ",this.studentsDB.GetData(queryOne));
    console.log("Marks: ", this.studentsDB.GetData(queryTwo));
}

};