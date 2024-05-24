export class Mystring {
  value;
  constructor(value) {
    this.value = value;
  }
  remove(index) {
    if (index < 0 || index >= this.value.length) {
      return this.value;
    }

    console.log("this.value :>> ", this.value);
    return this.value.slice(index, this.value.length);
  }
}

const stringClass = new Mystring("Kamran");

const result = stringClass.remove(1);
console.log("result :>> ", result);
