import {useState} from "react";
import Form from "./components/Form";
import "./App.css";
import List from "./components/List";

const App = () => {
  const DummyData = [
    {id: "1", title: "공부하기", completed: true},
    {id: "2", title: "청소하기", completed: false},
  ];

  const [todoData, setTodoData] = useState(DummyData);
  const [todoInputValue, setTodoInputValue] = useState("");

  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />

        <Form
          todoInputValue={todoInputValue}
          setTodoInputValue={setTodoInputValue}
          todoData={todoData}
          setTodoData={setTodoData}
        />
      </div>
    </div>
  );
};

export default App;
