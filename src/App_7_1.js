import {useState, useEffect} from 'react';

function App() {
  const [toDo, setTodo] = useState("");
  const [toDoList, setTodoList] = useState([]);
  
  const onChange = (event) => {
    setTodo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setTodoList((prop) => [toDo, ...toDoList]);
    setTodo("");
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
        <button>Add ToDo</button>
      </form>
      <hr />
      <ul>
        {toDoList.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
