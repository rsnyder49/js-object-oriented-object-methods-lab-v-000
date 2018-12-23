function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  
  function veto() {
    console.log("No, I must disagree");
  }
  
  function apporve() {
    console.log("You can do that!");
  }
  
  function doCharity() {
    console.log("I like to help people.");
  }
  
  function releasePressStatement() {
    return "You will see great things from Scuber.";
  }
  
  function sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was training in ${this.training}.`
  }
}