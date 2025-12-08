import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registration from './components/Registration';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

function App() {

  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
