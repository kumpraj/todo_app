import './App.css';
import TodoForm from './components/TodoForm';
import { TodoHeader } from './components/TodoHeader';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App flex flex-wrap justify-around">
      <TodoHeader/>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
