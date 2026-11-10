export default class Student {
constructor(_name = "Unknown", _marks = {}) {
    this.name = _name;
    this.marks = _marks;
}

SetPercentage () {
    this.sum = this.marks.reduce((total, mark) => {
        return total + mark;
    }, 0);
    console.log(`The avg is ${this.sum}`);
}
GetInfo() {
    return 0;
}
};