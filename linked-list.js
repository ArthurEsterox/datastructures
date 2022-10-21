class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);

    let current;

    this.size++;

    // if list is empty add the element and make it head
    if (this.head === null) {
      this.head = node;
      return;
    }

    current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    const node = new Node(element);

    let current = this.head;
    let prev;

    this.size++;

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    current = this.head;
    let it = 0;

    while (it < index) {
      it++;
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return;
    }

    let current = this.head;
    let prev = current;
    let it = 0;

    this.size--;

    if (index === 0) {
      this.head = current.next;
      return current.element;
    }

    while (it < index) {
      it++;
      prev = current;
      current = current.next;
    }

    prev.next = current.next;

    return current.element;
  }

  removeElement(element) {
    let current = this.head;
    let prev = null;

    while (current !== null) {
      if (current.element === element) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
      }

      prev = current;
      current = current.next;
    }
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.element === element) {
        return count;
      }

      count++;
      current = current.next;
    }

    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let current = this.head;
    let str = '';

    while (current) {
      str += current.element + ' ';
      current = current.next;
    }

    console.log(str);
    return str;
  }
}
