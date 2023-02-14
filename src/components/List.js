import React from "react";

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
        <div key={data.id} completed={data.completed}>
          <input
            type='checkbox'
            defaultChecked={data.completed}
            onChange={() => handleCompleteChange(data.id)}
          />
          {data.title}
          <button onClick={() => handleClick(data.id)}>x</button>
        </div>
      ))}
    </>
  );
};

export default List;
