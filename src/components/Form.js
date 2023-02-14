import React from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  margin-top: 5px;
`;

const TodoInput = styled.input`
  flex: 10;
  padding: 5px;
`;

const TodoBtn = styled.input`
  flex: 1;
  padding: 5px 9px;
  cursor: pointer;
`;

const Form = ({todoInputValue, setTodoInputValue, todoData, setTodoData}) => {
  const handleChange = (e) => {
    setTodoInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {id: Date.now(), title: todoInputValue, completed: false};
    setTodoData([...todoData, newTodo]);
    setTodoInputValue("");
    console.log(todoData);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <TodoInput
        type='text'
        name='value'
        placeholder='해야 할 일을 입력하세요.'
        value={todoInputValue}
        onChange={handleChange}></TodoInput>
      <TodoBtn type='submit' value='입력'></TodoBtn>
    </Container>
  );
};

export default Form;
