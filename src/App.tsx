import { ToDoItem } from "./components/ToDoItem";
import ToDoItemModel from "./models/ToDoItemModel";

function App() {

  const items: ToDoItemModel[] = [
    { title: 'first', isDone: false },
    { title: 'second', isDone: true },
  ];
  return (
    <div>
      <h1>Hello from To Do</h1>
      <ul>
        {items.map(i => <ToDoItem title={i.title} isDone={i.isDone} />)}
      </ul>;
    </div>
  );
}

export default App;
