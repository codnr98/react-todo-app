import React from "react";

const List = ({todoData, setTodoData, data, provided}) => {
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
      key={data.id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}>
      <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 bg-gray-100 border rounded'>
        <div className='items-center'>
          <input
            className='mr-1'
            type='checkbox'
            defaultChecked={data.completed}
            onChange={() => handleCompleteChange(data.id)}
          />
          <span className={data.completed ? "line-through" : "none"}>
            {data.title}
          </span>
        </div>

        <div>
          <button onClick={() => handleClick(data.id)}>x</button>
        </div>
      </div>
    </div>
  );
};

export default List;
