class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CustomList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    pushToTail(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    removeLast() {
      if (!this.head) return;
  
      let current = this.head;
      let previous = null;
  
      while (current.next) {
        previous = current;
        current = current.next;
      }
  
      if (previous) {
        previous.next = null;
        this.tail = previous;
      } else {
        this.head = null;
        this.tail = null;
      }
  
      this.size--;
    }
  
    remove(index) {
      if (index < 0 || index >= this.size || !this.head) return;
  
      let current = this.head;
      let previous = null;
      let currentIndex = 0;
  
      if (index === 0) {
        this.head = current.next;
        if (!this.head) {
          this.tail = null;
        }
      } else {
        while (currentIndex < index) {
          previous = current;
          current = current.next;
          currentIndex++;
        }
  
        previous.next = current.next;
  
        if (index === this.size - 1) {
          this.tail = previous;
        }
      }
  
      this.size--;
    }
  
    get(index) {
      if (index < 0 || index >= this.size || !this.head) return null;
  
      let current = this.head;
      let currentIndex = 0;
  
      while (currentIndex < index) {
        current = current.next;
        currentIndex++;
      }
  
      return current.data;
    }
  }
  