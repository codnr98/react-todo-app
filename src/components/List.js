import React from "react";

const List = ({id, title, provided, completed, todoData, setTodoData}) => {
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
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}>
      <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 bg-gray-100 border rounded'>
        <div className='items-center'>
          <input
            className='mr-1'
            type='checkbox'
            defaultChecked={completed}
            onChange={() => handleCompleteChange(id)}
          />
          <span className={completed ? "line-through" : "none"}>{title}</span>
        </div>

        <div>
          <button onClick={() => handleClick(id)}>x</button>
        </div>
      </div>
    </div>
  );
};

export default List;
