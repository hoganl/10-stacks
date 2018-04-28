'use strict';

const LinkedList = require('../../../05-linked-list/src/lib/linked-list');

class Stack {
  constructor() {
    this.__storage = new LinkedList();
  }

  push(value) {
    this.__storage.insertAtEnd(value);
  }

  pop() {
    return this.__storage.pop();
  }

  peek() {
    return this.__storage.findLast();
  }

  isEmpty() {
    if (!this.__storage.head) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
