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
    <form className='flex pt-1' onSubmit={handleSubmit}>
      <input
        className='w-full px-3 py-2 mr-2 text-gray-500 border rounded'
        type='text'
        name='value'
        placeholder='해야 할 일을 입력하세요.'
        value={todoInputValue}
        onChange={handleChange}></input>
      <input
        className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200'
        type='submit'
        value='입력'></input>
    </form>
  );
};

export default Form;
