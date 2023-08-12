import {useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import UserContext from './components/Context';

function App() {
 const [user, setUser] = useState()
 const [ profile, setProfile ] = useState([]);
 
  return (
    <UserContext.Provider value={{user, setProfile, setUser, profile}}>
    <div>
      <h2>Its Time</h2>
        <AppRouter/>
      </div>
      </UserContext.Provider>
  );
  
}

export default App;
