// DEPENDENCIES
import './Styles/App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

// PAGES
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import FourOFour from "./Pages/FourOFour";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  const [genreOption, setGenreOption] = useState('All Songs');


  return (
   <div className="App">
      <NavBar setGenreOption={setGenreOption}/>
      <main>
        <Routes>
          <Route path="/" element={<Index genreOption={genreOption} />} />
          <Route path="/songs" element={<Index genreOption={genreOption} />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main> 
   </div>
  )
}

export default App;