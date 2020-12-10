// Implement the following operations of a queue using stacks.
// Push O(1), Pop O(n)

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  this.peek();
  return this.stack2.pop();
};

MyQueue.prototype.peek = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

// Test
var obj = Object.create(MyQueue).createNew();
obj.push(x);
var param_2 = obj.pop();
var param_3 = obj.peek();
var param_4 = obj.empty();
