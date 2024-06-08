import LinkedList from "./LinkedList.js";


const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);

console.log(linkedList.size);
console.log(linkedList.head);
console.log(linkedList.tail);  // Output: Node { value: 2, nextNode: null }
console.log(linkedList.at(1));    // Output: Node { value: 1, nextNode: Node { value: 2, nextNode: null } }
console.log(linkedList.toString());  // Output: (0) -> (1) -> (2) -> null
console.log(linkedList.contains(2)); // Output: true
console.log(linkedList.find(1));
linkedList.insertAt(5, 2);
console.log(linkedList.toString());  // Output: (0) -> (1) -> (5) -> (2) -> null

linkedList.removeAt(2);
console.log(linkedList.toString());  // Output: (0) -> (1) -> (2) -> null