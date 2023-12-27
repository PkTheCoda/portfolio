import './App.css'
import React from 'react';
import Homepage from './Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hire from './Hire';

function App() {

  return (
    <>
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
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
