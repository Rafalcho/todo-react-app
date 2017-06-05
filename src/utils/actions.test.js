import {addTodo} from './actions.js';

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

  expect(result).not.toBe(expected);
});
