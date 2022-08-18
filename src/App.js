import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {selectUser} from './features/userSlice';
import Login from './Components/Login/Login';
import Tasks from './Pages/Tasks/Tasks';
import Logout from './Components/logout/Logout';
import Navbar from './Components/Navbar/Navbar';
import Users from './Pages/Users/Users';

import "./App.css";

const App = () => {
  const user = useSelector(selectUser);

  return (
      <div>
          {user ? <Tasks /> : <Login /> }
      </div>
  )
}

export default App;
