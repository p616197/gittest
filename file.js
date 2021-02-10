var ClassA = function() {
    this.name = "class A";
};

ClassA.prototype.print = function() {
    console.log(this.name);
};

var a = new ClassA();
a.print();

var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

var ClassB = function() {
    this.name = "class B";
    this.surname = "I'm the child";
};
 
inheritsFrom(ClassB, ClassA);

ClassB.prototype.print = function() {
    ClassA.prototype.print.call(this);
    console.log(this.surname);
};

var b = new ClassB();
b.print();

var ClassC = function () {
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
 
var c = new ClassC();
c.print();

var ClassD = function () {
    this.name = "class D";
    this.age = 42;
};
 
inheritsFrom(ClassC, ClassB);