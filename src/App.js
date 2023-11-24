import './App.css';
import { Home } from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { User } from './User';
function App() {
  // here i am using a custom hook 
  return (
    <div>
      <BrowserRouter>
         <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;