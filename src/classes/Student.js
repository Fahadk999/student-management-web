export default class Student {
marks = [];
name = "";

constructor(_name = "Unknown", _marks = []) {
    this.name = _name;
    this.marks = _marks;
}
SetInfo (_name, _marks) {
    this.name = _name;
    this.marks = _marks;
}
GetPercentage () {
    const sum = this.marks.reduce((total, mark) => {
        return total + mark;
    }, 0);
    return (sum/300)*100;
}
GetInfo() {
    return 0;
}
};