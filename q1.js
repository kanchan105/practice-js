class Person
{
  constructor(name,age)
  {
   this.name=name;
    this.age=age;
  }
   info()
   {
    console.log(`my name is ${this.name} and age ${this.age}`)
   }
}

K= new Person("kanchan",27)
K.info()