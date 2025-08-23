// Binary Tree Rules
// --------------------------------------------------------------------------------------------
// For a data structure to be considered a valid binary tree, it needs to follow these 3 rules:
// 1. There should only be one root (a node without a parent)
// 2. All nodes can only have one parent and up to 2 children
// 3. All nodes should have a single root path


// Binary Tree Examples
// --------------------------------------------------------------------------------------------
// Complete Binary Tree
//             a 
//           /   \
//         b       c
//        / \     / \
//       d   e   f   g
//      / \
//     h   i

// Empty Binary Tree (A tree without nodes)
// 
// 

// Singleton Tree (a root with no children)
//             j
// 

// Degenerate Binary Tree or Pathological Binary Tree
//            k
//           /
//          l
//           \
//            m

// Skewed Binary Tree (Left or Right)
//           n
//          /
//         o
//        /
//       p
//      /
//     q


// Traversing Binary Trees
// --------------------------------------------------------------------------------------------
// Binary Trees can be traversed using the following algorithms:
// 1. Depth First Search (DFS using a stack)
//    - Pre-order Traversal (Root - Left - Right)
//    - In-order Traversal (Left - Root - Right)
//    - Post-order Traversal (Left - Right - Root)
// 2. Breath First Search (BFS using a queue)
//    - Level-order Traversal

// A node in a binary tree can look as below:
class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Example using DFS to align all nodes in left most depth first order

// Complete Binary Tree
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
d.right = i;

// Singleton Binary Tree
const j = new Node("j");

// Degenerate/Pathological Binary Tree
const k = new Node("k");
const l = new Node("l");
const m = new Node("m");
k.left = l;
l.right = m;

// Left Skewed Binary Tree
const n = new Node("n");
const o = new Node("o");
const p = new Node("p");
const q = new Node("q");
n.left = o;
o.left = p;
p.left = q;

// Our left most depth first order should look like this: [a, b, d, h, i, e, c, f, g]

// Iterative Solution
const leftMostDepthFirstSearch = (root) =>{
  if(root === null) return [];
  const stack = [root];
  const visitedNodes = [];

  while(stack.length > 0){
    const currentNode = stack.pop()
    visitedNodes.push(currentNode.val);

    if(currentNode.right) stack.push(currentNode.right);
    if(currentNode.left) stack.push(currentNode.left);
  }

  return visitedNodes;
}

console.log("Example for complete binary tree:", leftMostDepthFirstSearch(a));
console.log("Example for empty binary tree:", leftMostDepthFirstSearch(null));
console.log("Example for singleton binary tree:", leftMostDepthFirstSearch(j));
console.log("Example for degenerate/pathological binary tree:", leftMostDepthFirstSearch(k));
console.log("Example for left skewed binary tree:", leftMostDepthFirstSearch(n));

// An example of DFS using recursion (recursion uses the call stack behavior)
const recursiveDfs = (root) => {
  if(root === null) return [];
  const leftValues = recursiveDfs(root.left);
  const rightValues = recursiveDfs(root.right);
  return [root.val, ...leftValues, ...rightValues];
}

console.log("Example for complete binary tree:", recursiveDfs(a));

// BFS

// Iterative solution
const leftBreathFirstSearch = (root) => {
  if(root === null) return [];

  const queue = [root];
  const visited = [];

  while(queue.length > 0){
    const currentNode = queue.shift();
    visited.push(currentNode.val);

    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right)
  }

  return visited;
}

console.log(leftBreathFirstSearch(a));
