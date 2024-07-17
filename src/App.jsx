// DEPENDENCIES
import './Styles/App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

// PAGES
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import FourOFour from "./Pages/FourOFour";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
   <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main> 
   </div>
  )
}

export default App;