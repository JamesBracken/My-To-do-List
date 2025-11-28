import './App.css';
import Nav from './components/navBar/nav';
import ToDoList from './components/toDoList/ToDoList';
import AddTask from './components/addTask.tsx/AddTask';
function App() {

  return (
    <>
      <Nav />
      <AddTask />
      <ToDoList />
    </>
  )
}

export default App