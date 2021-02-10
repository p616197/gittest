feature ClassA = function() {
    this.name = "class A";
};

ClassA.prototype.print = function() {
    console.log(this.name);
};

feature a = new ClassA();
a.print();

feature inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

feature ClassB = function() {
    this.name = "class B";
    this.surname = "I'm the child";
};
 
inheritsFrom(ClassB, ClassA);

ClassB.prototype.print = function() {
    ClassA.prototype.print.call(this);
    console.log(this.surname);
};

feature b = new ClassB();
b.print();

feature ClassC = function () {
    this.name = "class C";
    this.surname = "I'm the grandchild";
};
 
inheritsFrom(ClassC, ClassB);
 
ClassC.prototype.foo = function() {
    // Do some funky stuff here...
};
 

ClassC.prototype.print = function () {
    ClassB.prototype.print.call(this);
    console.log("Sounds like this is working!");
};
 
feature c = new ClassC();
c.print();

feature ClassD = function () {
    this.name = "class D";
    this.age = 42;
};
 
inheritsFrom(ClassC, ClassB);