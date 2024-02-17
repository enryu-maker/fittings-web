import logo from './logo.svg';
import './App.css';
import Login from './Screens/AuthScreen/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Screens/Registration';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
       <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
