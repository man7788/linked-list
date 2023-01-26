/* eslint-disable consistent-return */
import './style.css';

const LinkedList = () => {
  const list = {};
  // Use recursion to find tail
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

  // Count how many recurions
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
      return 'none';
    }

    if (list.nextNode === null) {
      return list;
    }

    if (typeof list.nextNode === 'object') {
      return list.value;
    }
  };

  // Recursion until nextNode is null
  const tail = (next) => {
    if (next === undefined) {
      next = list;
    }

    if (Object.keys(list).length === 0) {
      return 'none';
    }

    if (next.nextNode === null) {
      return next.value;
    }

    if (typeof next.nextNode === 'object') {
      next = next.nextNode;
      return tail(next);
    }
  };
  // Each recursion num++
  const at = () => console.log('diu');
  // Recursion num++, replace num + 1
  const pop = () => console.log('diu');
  // Simple recursion unitl nextNode null
  const contains = () => console.log('diu');
  // Simple recursion unitl value found
  const find = () => console.log('diu');
  // Simple recursion unitl nextNode null
  // Mutate string with added ${value}
  const toString = () => console.log('diu');
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
