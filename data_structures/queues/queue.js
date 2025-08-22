// A queue is FIFO data structure (First In First Out)
// Think of it like a line at a store, first person on the line checks out first, last person checks out last
// An optimized implementation of a queue gets the first and last elements in constant time O(1)



// using an array (not optimal - time complexity of O(n) when removing the first item on the queue)
console.log("\n-------------------")
console.log("Array Implementation\n")

const queue = [];

// Adding to the queue (enqueing)
queue.push("A");
queue.push("B");
console.log("Current queue:", queue);

// Removing from the queue (dequeing the first in)
queue.shift()
console.log("Current queue:", queue);



// using a Linked List (optimal - time complexity of O(1) for enqueing and dequeing)
console.log("\n-------------------")
console.log("Linked List Implementation\n")

class QueueNode{
  constructor(val){
    this.val = val
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null
    this.size = 0;
  }

  enqueue(val){
    const newNode = new QueueNode(val);

    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
  }

  dequeue(){
    if(this.size === 0) return null;

    const firstNode = this.first;

    if(this.size === 1){
      this.back = null;
    }

    this.first = this.first.next;
    this.size--;

    return firstNode.val;
  }

  getFirst(){
    if(this.size === 0) return null;
    return this.first.val;
  }

  getLast(){
    if(this.size === 0) return null;
    return this.last.val;
  }
}

const newQueue = new Queue();

console.log("Getting first queue item:", newQueue.getFirst());
console.log("Getting first queue item:", newQueue.getLast());
console.log("Getting queue size:", newQueue.size);
newQueue.enqueue("A");
newQueue.enqueue("B");
newQueue.enqueue("C");
console.log("Getting first queue item:", newQueue.getFirst());
console.log("Getting first queue item:", newQueue.getLast());
console.log("Getting queue size:", newQueue.size);
newQueue.dequeue();
newQueue.enqueue("D");
newQueue.enqueue("E");
console.log("Getting first queue item:", newQueue.getFirst());
console.log("Getting first queue item:", newQueue.getLast());
console.log("Getting queue size:", newQueue.size);