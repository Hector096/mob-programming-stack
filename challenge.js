class Stack {
constructor(){
  this.size = 0
  this.stack =[]
}

  push(number) {
    this.stack = [...this.stack,number]
    this.size +=1
  }
  
  pop() {
    this.stack.splice(this.size -1 ,1);
    this.size -= 1;
  }
  
  min() {
    let value = this.stack[0];
    for(let i = 0; i<this.size;i+=1)
      value = Math.min(value,this.stack[i])
    return value
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack


