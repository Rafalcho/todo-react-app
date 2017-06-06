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

export const findTodo = (todoItems, id) => {
  return todoItems.find(item => item.id === id);
};
