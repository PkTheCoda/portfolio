import './App.css'
import React, {useState} from 'react';
import Homepage from './Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hire from './Hire';
import TallyFormEmbed from './TallyForm';
import { Analytics } from '@vercel/analytics/react';
import { MdClose } from "react-icons/md";

function App() {

  const [showAgency, setShowAgency] = useState(true)

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

          <Route 
            path="/form"
            element={<TallyFormEmbed />}
          />

          
        </Routes>

        

        
      </BrowserRouter>
      <Analytics />
      {
        showAgency &&
        <div className='w-60 p-4 hidden lg:flex text-center font-outfit flex-col gap-y-2 bg-white shadow-xl rounded-xl fixed bottom-5 right-5'>
          <MdClose className='w-4 h-4 absolute top-2 right-2 cursor-pointer' onClick={() => setShowAgency(false)}/>
          <h1 className="text-base xl:text-lg font-medium">I started my own Web Development Agency!</h1>
          <p className='text-xs xl:text-sm'>
            If you need anything built for a negotiable price, you can visit my agency site!
          </p>
          <a href="https://thryvedesign.com" target='_blank' className='px-2 text-xs xl:text-sm mt-1 py-1 bg-amber-700 w-max rounded-md text-white mx-auto'>
            I'm Interested!
          </a>
        </div>
      }
    </>
  )
}

export default App
