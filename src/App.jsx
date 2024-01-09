import './App.css'
import Navbar from './Components/Header'
import React from 'react';
import Homepage from './Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hire from './Hire';
import TallyFormEmbed from './TallyForm';

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route 
            index 
            element={<Homepage />}
          />

        <Route 
            path="/hire"
            element={<Hire />}
          />

          <Route 
            path="/form"
            element={<TallyFormEmbed />}
          />

          
        </Routes>

        

        
      </BrowserRouter>

    </>
  )
}

export default App
