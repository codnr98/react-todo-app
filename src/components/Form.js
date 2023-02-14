import React from "react";

const Form = ({todoInputValue, setTodoInputValue, todoData, setTodoData}) => {
  const handleChange = (e) => {
    setTodoInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {id: Date.now(), title: todoInputValue, completed: false};
    setTodoData([...todoData, newTodo]);
    setTodoInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='value'
        placeholder='해야 할 일을 입력하세요.'
        value={todoInputValue}
        onChange={handleChange}></input>
      <input type='submit' value='입력'></input>
    </form>
  );
};

export default Form;
