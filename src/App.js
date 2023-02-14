import {useState} from "react";
import styled from "styled-components";
import "./App.css";

const DeleteBtn = styled.button`
  border: none;
  padding: 5px 9px;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  float: right;
`;

const GetStyle = styled.div`
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
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

const App = () => {
  const DummyData = [
    {id: "1", title: "공부하기", completed: true},
    {id: "2", title: "청소하기", completed: false},
  ];

  const [todoData, setTodoData] = useState(DummyData);
  const [todoInputValue, setTodoInputValue] = useState("");

  const handleClick = (id) => {
    setTodoData(todoData.filter((data) => data.id !== id));
  };

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
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>

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

        <form style={{display: "flex"}} onSubmit={handleSubmit}>
          <TodoInput
            type='text'
            name='value'
            placeholder='해야 할 일을 입력하세요.'
            value={todoInputValue}
            onChange={handleChange}></TodoInput>
          <TodoBtn type='submit' value='입력'></TodoBtn>
        </form>
      </div>
    </div>
  );
};

export default App;
