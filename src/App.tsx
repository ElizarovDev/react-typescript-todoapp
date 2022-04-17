import { ToDoItem } from "./Models/ToDoItem";

function App() {

  const items: ToDoItem[] = [
    { title: 'first', isDone: false },
    { title: 'second', isDone: true },
  ];
  return (
    <div>
      <h1>Hello from To Do</h1>
      <ul>
        {items.map(item => (<li>{item.title} <input type="checkbox" checked={item.isDone} /></li>))}
      </ul>
    </div>
  );
}

export default App;
