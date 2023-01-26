/* eslint-disable consistent-return */
import './style.css';

const LinkedList = () => {
  const list = {};

  const append = (value, next) => {
    if (next === undefined) {
      next = list;
    }

    if (next.nextNode === null) {
      next.nextNode = Node(value, null);
      return next;
    }

    if (Object.keys(list).length === 0) {
      const data = Node(value, null);
      list.value = data.value;
      list.nextNode = data.nextNode;
      return list;
    }

    if (typeof next.nextNode === 'object') {
      next = next.nextNode;
      return append(value, next);
    }

    return list;
  };

  const prepend = (value) => {
    if (Object.keys(list).length === 0) {
      const data = Node(value, null);
      list.value = data.value;
      list.nextNode = data.nextNode;
      return list;
    }

    if (typeof list.nextNode === 'object') {
      const temp = { ...list };
      list.value = value;
      list.nextNode = temp;
      return list;
    }

    return list;
  };

  const size = (next, total = 1) => {
    if (next === undefined) {
      next = list;
    }

    if (Object.keys(list).length === 0) {
      return 0;
    }

    if (next.nextNode === null) {
      return total;
    }

    if (typeof next.nextNode === 'object') {
      next = next.nextNode;
      return size(next, total + 1);
    }

    return total;
  };

  const head = () => {
    if (Object.keys(list).length === 0) {
      return null;
    }

    if (list.nextNode === null) {
      return list;
    }

    if (typeof list.nextNode === 'object') {
      return list;
    }
  };

  const tail = (next) => {
    if (next === undefined) {
      next = list;
    }

    if (Object.keys(list).length === 0) {
      return null;
    }

    if (next.nextNode === null) {
      return next;
    }

    if (typeof next.nextNode === 'object') {
      next = next.nextNode;
      return tail(next);
    }
  };
  // Each recursion num++
  const at = (index, next, count = 0) => {
    if (index === undefined || typeof index !== 'number') {
      return 'Please enter an index number.';
    }

    if (next === undefined) {
      next = list;
    }

    if (index === count) {
      return next;
    }

    if (next.nextNode !== null) {
      next = next.nextNode;
      return at(index, next, count + 1);
    }
    return 'Index out of range.';
  };

  const pop = (next, last) => {
    if (next === undefined) {
      next = list;
    }

    if (Object.keys(list).length === 0) {
      return null;
    }

    if (next.nextNode === null) {
      last.nextNode = null;
      return list;
    }

    if (typeof next.nextNode === 'object') {
      last = next;
      next = next.nextNode;
      return pop(next, last);
    }
  };

  const contains = (value, next) => {
    if (value === undefined) {
      return 'Please enter a value.';
    }

    if (next === undefined) {
      next = list;
    }

    if (next.value === value) {
      return true;
    }

    if (next.nextNode !== null) {
      next = next.nextNode;
      return contains(value, next);
    }
    return false;
  };

  const find = (value, next, index = 0) => {
    if (value === undefined) {
      return 'Please enter a value.';
    }

    if (next === undefined) {
      next = list;
    }

    if (next.value === value) {
      return index;
    }

    if (next.nextNode !== null) {
      next = next.nextNode;
      return find(value, next, index + 1);
    }
    return null;
  };

  const toString = (next, last, string = '') => {
    if (next === undefined) {
      next = list;
    }

    if (Object.keys(list).length === 0) {
      return null;
    }

    if (next.nextNode === null) {
      string += `(${next.value}) -> null`;
      return string;
    }

    if (next.nextNode !== null) {
      string += `(${next.value}) -> `;
      next = next.nextNode;
      return toString(next, last, string);
    }
  };

  return {
    list,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const Node = (value, nextNode) => ({ value, nextNode });

const diu = LinkedList();
// diu.append(123);
// diu.append(456);
// diu.append(999);

// diu.prepend('AAA');
// diu.prepend('BBB');
// diu.append(789);
// diu.prepend('CCC');
// diu.append('DDD');

console.log(diu.list);
// console.log(diu.size());
// console.log(diu.head());
// console.log(diu.tail());
// console.log(diu.at(2));
// console.log(diu.pop());
// console.log(diu.contains(456));
// console.log(diu.find(123));
// console.log(diu.toString());
