// Classes

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher,question);
  }
}

var a = new Workshop('Omar');
var b = new Workshop('Hany');


a.ask('Is your name Omar?');
b.ask('Is your name Hany?');
