
class Stack {
  constructor(){
    this.size = 0
    this.stack=[]
  }

  push(val){
    this.stack =[...this.stack,val]
    this.size += 1
  }

  pop(){
    this.stack.splice(this.size-1,1)
    this.size -=1
  }
  min(){
    let position = this.stack[0]
    for(let i=0; i<this.size;i+=1)
      position = Math.min(position,this.stack[i])

      return position
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


