import {useState} from "react";
import styled from "styled-components";
import "./App.css";

const App = () => {
  const DummyData = [
    {id: "1", title: "공부하기", completed: true},
    {id: "2", title: "청소하기", completed: false},
  ];

  const [todoData, setTodoData] = useState(DummyData);

  const handleClick = (id) => {
    setTodoData(todoData.filter((data) => data.id !== id));
  };

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
    text-decoration: none;
  `;

  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((data) => (
          <GetStyle key={data.id}>
            <input type='checkbox' defaultChecked={false} />
            {data.title}
            <DeleteBtn onClick={() => handleClick(data.id)}>x</DeleteBtn>
          </GetStyle>
        ))}
      </div>
    </div>
  );
};

export default App;
