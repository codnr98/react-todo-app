import React from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
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
      <DragDropContext>
        <Droppable droppableId='todoList'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}>
                  {(provided, snapshot) => (
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
                          <span
                            className={
                              data.completed ? "line-through" : "none"
                            }>
                            {data.title}
                          </span>
                        </div>

                        <div>
                          <button onClick={() => handleClick(data.id)}>
                            x
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default List;
