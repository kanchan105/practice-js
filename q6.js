//differenec between object.freeze vs constant
const x=10;
const a={
  name:"kanchan",
  age:27
}
Object.freeze(a)
a.name="rana"
console.log(a.name)