import React from "react";
import styled from "styled-components";

const GetStyle = styled.div`
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const DeleteBtn = styled.button`
  border: none;
  padding: 5px 9px;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  float: right;
`;

const List = ({todoData, setTodoData}) => {
  const handleClick = (id) => {
    setTodoData(todoData.filter((data) => data.id !== id));
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <>
      {todoData.map((data) => (
        <GetStyle key={data.id} completed={data.completed}>
          <input
            type='checkbox'
            defaultChecked={data.completed}
            onChange={() => handleCompleteChange(data.id)}
          />
          {data.title}
          <DeleteBtn onClick={() => handleClick(data.id)}>x</DeleteBtn>
        </GetStyle>
      ))}
    </>
  );
};

export default List;
