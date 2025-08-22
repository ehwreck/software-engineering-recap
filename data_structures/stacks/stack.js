// A stack is LIFO data structure (Last In First Out)
// Think of it like a stack of plates


console.log("\n-------------------")
console.log("Array Implementation\n")

// using an array
const stack = [];
console.log("Calling push:", stack[stack.push("A")-1]);
console.log("Calling push:", stack[stack.push("B")-1]);
console.log("Current stack:", stack);
console.log("Calling pop:", stack.pop());
console.log("Current stack:", stack);
console.log("Calling push:", stack[stack.push("C")-1]);
console.log("Calling push:", stack[stack.push("D")-1]);
console.log("Current stack:", stack);

// Maximally Efficient Stack: 0(1) time to push/pop

console.log("\n-------------------")
console.log("Linked List Implementation\n")

// using a Linked List
class StackNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.size = 0;
  }

  push(val){
    if(this.size === 0){
      this.top = new StackNode(val);
    } else {
      const lastNode = new StackNode(val);
      lastNode.next = this.top
      this.top = lastNode
    }

    this.size += 1;
    return this.top.val
  }

  pop(){
    if(this.size === 0) return null;
    const popedNode = this.top;
    this.top = this.top.next;
    this.size -= 1;
    return popedNode.val;
  }

  getTop(){
    return this.top.val
  }
}

const newStack = new Stack();
console.log("Calling push:", newStack.push("A"));
console.log("Calling push:", newStack.push("B"));
console.log("Calling push:", newStack.push("C"));
console.log("Stack size:", newStack.size);
console.log("Caliing getTop:", newStack.getTop());
console.log("Calling pop:", newStack.pop())
console.log("Caliing getTop:", newStack.getTop());
console.log("Stack size:", newStack.size);
