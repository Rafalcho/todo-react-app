export const addTodo = (todoItems, newTodo) => {
  return [...todoItems, newTodo];
};

export const generateNumber = () => (
  Math.floor(Math.random() * 10000) + 1
);
