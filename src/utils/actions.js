export const addTodo = (todoItems, newTodo) => (
  [...todoItems, newTodo]
);

export const generateNumber = () => (
  Math.floor(Math.random() * 10000) + 1
);

export const deleteTodo = (todoItems, id) => {
  const removeId = todoItems.findIndex(item => item.id === id);
  return [
    ...todoItems.slice(0, removeId),
    ...todoItems.slice(removeId + 1)
    ];
};

export const findTodo = (todoItems, id) => todoItems.find(item => item.id === id);

export const toggleDone = (todo) => (
  {
    id: todo.id,
    name: todo.name,
    isDone: !todo.isDone,
  }
);

export const updateItem = (todoItems, id) => {
  const todo = findTodo(todoItems, id);
  const updatedTodo = toggleDone(todo);
  const todoIndex = todoItems.findIndex(todo => todo.id === id);

  return [
    ...todoItems.slice(0, todoIndex),
    updatedTodo,
    ...todoItems.slice(todoIndex + 1)
  ];
};
