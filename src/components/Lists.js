import React from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import List from "./List";

const Lists = ({todoData, setTodoData}) => {
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
                    <List
                      todoData={todoData}
                      setTodoData={setTodoData}
                      data={data}
                      provided={provided}
                      snapshot={snapshot}
                    />
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

export default Lists;
