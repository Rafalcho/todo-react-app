import {addTodo, deleteTodo, findTodo, toggleDone, updateItem} from './actions.js';

test('addTodo should add new todo to the array', () => {
  const oldArray = [
    {id: 1, name: 'first', isDone: false},
    {id: 2, name: 'second', isDone: false}
  ];

  const newTodo = {id: 3, name: 'third', isDone: false};

  const expected = [
    {id: 1, name: 'first', isDone: false},
    {id: 2, name: 'second', isDone: false},
    {id: 3, name: 'third', isDone: false}
  ];

  const result = addTodo(oldArray, newTodo);

  expect(result).toEqual(expected);
});

test('addTodo should not change exisitng array', () => {
  const oldArray = [
    {id: 1, name: 'first', isDone: false},
    {id: 2, name: 'second', isDone: false}
  ];

  const newTodo = {id: 3, name: 'third', isDone: false};

  const expected = [
    {id: 1, name: 'first', isDone: false},
    {id: 2, name: 'second', isDone: false},
    {id: 3, name: 'third', isDone: false}
  ];

  const result = addTodo(oldArray, newTodo);

  expect(result).not.toBe(oldArray);
});

test('deleteTodo should remove todo from the array by given id', () => {
  const oldArray = [
    {id: 1, name: 'first', isDone: false},
    {id: 2, name: 'second', isDone: false},
    {id: 3, name: 'third', isDone: false}
  ];

  const id = 1;

  const expected = [
    {id: 2, name: 'second', isDone: false},
    {id: 3, name: 'third', isDone: false}
  ];

  const result = deleteTodo(oldArray, id);

  expect(result).toEqual(expected);
});

test('deleteTodo should not change exisitng array', () => {
  const oldArray = [
    {id: 1, name: 'first', isDone: false},
    {id: 2, name: 'second', isDone: false},
    {id: 3, name: 'third', isDone: false},
  ];

  const id = 1;

  const result = deleteTodo(oldArray, id);

  expect(result).not.toBe(oldArray);
});

test('findItem should return todo with the given id', () => {
  const oldArray = [
    {id: 1, name: 'first', isDone: false},
    {id: 2, name: 'second', isDone: false},
    {id: 3, name: 'third', isDone: false},
  ];

  const id = 3;
  const expected = {id: 3, name: 'third', isDone: false};
  const result = findTodo(oldArray, id);

  expect(result).toEqual(expected);
});

test('toggleDone should toggle the todo isDone state', () => {
  const todo = {id: 1, name: 'first', isDone: false};
  const expected = {id: 1, name: 'first', isDone: true};

  const result = toggleDone(todo);

  expect(result).toEqual(expected);
});

test('toggleDone should not change the original todo', () => {
  const todo = {id: 1, name: 'first', isDone: false};
  const result = toggleDone(todo);
  expect(result).not.toBe(todo);
});

test('updateItem should swap old todo with the updated one', () => {
  const oldArray = [
    {id: 1, name: 'first', isDone: false},
    {id: 2, name: 'second', isDone: false},
    {id: 3, name: 'third', isDone: false},
  ];

  const expected = [
    {id: 1, name: 'first', isDone: false},
    {id: 2, name: 'second', isDone: true},
    {id: 3, name: 'third', isDone: false},
  ];

  const result = updateItem(oldArray, 2);

  expect(result).toEqual(expected);
});

test('updateItem should not change original array', () => {
  const oldArray = [
    {id: 1, name: 'first', isDone: false},
    {id: 2, name: 'second', isDone: false},
    {id: 3, name: 'third', isDone: false},
  ];
  const result = updateItem(oldArray, 2);

  expect(result).not.toBe(oldArray);

});
