import {useState} from "react";
import Form from "./components/Form";
import "./App.css";
import List from "./components/Lists";

const App = () => {
  const DummyData = [
    {id: "1", title: "공부하기", completed: true},
    {id: "2", title: "청소하기", completed: false},
  ];

  const [todoData, setTodoData] = useState(DummyData);
  const [todoInputValue, setTodoInputValue] = useState("");

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-50'>
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
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
