import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div>
    
      <Routes>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
