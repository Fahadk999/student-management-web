export default class Student {
constructor(_name = "Unknown", _age, _marks = []) {
    this.SetInfo(_name, _age, _marks);
}
SetInfo (_name, _age, _marks) {
    this.name = _name;
    this.marks = _marks;
    this.age = _age;
}
GetPercentage () {
    const sum = this.marks.reduce((total, mark) => {
        return total + mark;
    }, 0);
    this.percentage = ((sum/300)*100).toFixed(2);
    return this.percentage;
}
GetInfo() {
    return 0;
}
};