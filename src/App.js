import Login from './login.js';
import Signup from './signup';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Dashboard from './dashboard';
import MyFiles from './myflies.js';
import SharedFiles from './shared.js';
import UpdatePassword from './updatepassword.js';
import React from 'react';
import AvailableFiles from './available.js';

const App = () => {
  return (
    <>
    <div className="App">
    <Routes basename='/'>
			<Route path="/login" exact element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/" element={<Dashboard page={<MyFiles />}/>}></Route>    
      <Route path="/shared" element={<Dashboard page={<SharedFiles />}/>}></Route>  
      <Route path="/allfiles" element={<Dashboard page={<AvailableFiles />}/>}></Route> 
      <Route path="/password" element={<Dashboard page={<UpdatePassword />}/>}></Route>  
    </Routes>
    </div>
    </>
  );
  
}

export default App;
