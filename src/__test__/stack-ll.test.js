'use strict';

const Stack = require('../lib/stack-ll');

describe('stack-ll.js', () => {
  it('#constructor', () => {
    const testStack = new Stack();
    expect(testStack.__storage.head).toBeNull();
  });

  it('#push', () => {
    const testStack = new Stack();
    testStack.push(5);
    testStack.push(6);
    testStack.push(7);
    
    expect(testStack.__storage.head.value).toEqual(5);
    expect(testStack.__storage.head.next.value).toEqual(6);
    expect(testStack.__storage.head.next.next.value).toEqual(7);
  });

  it('#pop', () => {
    const testStack = new Stack();
    testStack.push(5);
    testStack.push(6);
    testStack.push(7);
    testStack.pop();

    expect(testStack.__storage.head.next.next).toBeNull();
  });

  it('#peek', () => {
    const testStack = new Stack();    
    testStack.push(5);
    testStack.push(6);
    testStack.push(7);

    expect(testStack.peek()).toEqual(7);
  });

  it('#isEmpty to be Falsy', () => {
    const testStack = new Stack();        
    testStack.push(5);
    expect(testStack.isEmpty()).toBeFalsy();     
  });

  it('#isEmpty to be Truthy', () => {
    const testStack = new Stack();        
    expect(testStack.isEmpty()).toBeTruthy();
  });
});
