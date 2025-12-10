import './App.css';
import Nav from './components/navBar/nav';
import ToDoList from './components/toDoList/ToDoList';
import AddTask from './components/addTask.tsx/AddTask';
import { logIn, loginTest } from './login';
import config from "./config.json";
import { generateCodeVerifier, generateCodeChallenge } from './PKCEHelper';

async function generatePKCE() {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  sessionStorage.setItem("codeChallenge", codeChallenge)
  console.log("generateCodeVerifier:", codeVerifier)
  console.log("generateCodeChallenge:", codeChallenge)
  console.log("generatedPKCE", sessionStorage.getItem("codeChallenge"))
}

function App() {
  generatePKCE()
  return (
    <>
      <button id='counter' onClick={() => {
        loginTest()
      }
      }>Click me</button>
      <Nav />
      <AddTask />
      <ToDoList />
    </>
  )
}

export default App