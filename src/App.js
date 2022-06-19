// React 
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import {useState} from 'react';
// Components
import Home from './components/home';
import About from './components/about';
import NavBar from './components/navBar';
import Register from './components/register';
import Withdraw from './components/withdraw';
import Deposit from './components/deposit';

// Context
import { UserContext } from './components/userContext';

function App() {
  
  const initialState =  [{ name: 'Elias', email: 'eliasconsalvo@gmail.com', password: 'password' , balance: 0, userId: 0}]

  const [users, setUsers] = useState(initialState);
  return (
    <Router>

      <NavBar></NavBar>

      <UserContext.Provider value={{users, setUsers}}>
      
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/deposit" element={<Deposit></Deposit>}></Route>
          <Route path="/withdraw" element={<Withdraw></Withdraw>}></Route>
        </Routes>

      </UserContext.Provider>

    </Router>
  );
}

export default App;
