import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/navBar/Nav';
import Home from './pages/Home';
import AuthCallbackPage from './pages/AuthCallbackPage';

function App() {
  return (
    <BrowserRouter>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App