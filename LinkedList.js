import Node from "./Node.js";

export default class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value){
        const newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    size(){
        return this.size;
    }

    head(){
        return this.head;
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        let prevNode = null;
        while (currentNode.nextNode) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        if (prevNode) {
            prevNode.nextNode = null;
            this.tail = prevNode;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.size--;
        return currentNode;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let currentNode = this.head;
        while (currentNode) {
            result += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        if (index === 0) {
            this.prepend(value);
            return true;
        }
        if (index === this.size) {
            this.append(value);
            return true;
        }
        const newNode = new Node(value);
        let currentNode = this.head;
        let prevNode = null;
        for (let i = 0; i < index; i++) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        prevNode.nextNode = newNode;
        newNode.nextNode = currentNode;
        this.size++;
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (index === 0) {
            return this.pop();
        }
        let currentNode = this.head;
        let prevNode = null;
        for (let i = 0; i < index; i++) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        prevNode.nextNode = currentNode.nextNode;
        if (!currentNode.nextNode) {
            this.tail = prevNode;
        }
        this.size--;
        return currentNode;
    }
}