// DEPENDENCIES
import './Styles/App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

// PAGES
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import FourOFour from "./Pages/FourOFour";

// COMPONENTS
import NavBar from "./Components/NavBar";

// MOBILE COMPONENTS
import MobileNav from './Mobile/Components/MobileNav';

function App() {
  const [genreOption, setGenreOption] = useState('All Songs');

  const mobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  if(mobile) {
    return(
      <div className='Mobile'>
        <MobileNav/>
        <Routes>
          <Route path="/" element={<Index setGenreOption={setGenreOption} genreOption={genreOption}/>}/>
          <Route path="/songs" element={<Index setGenreOption={setGenreOption} genreOption={genreOption}/>}/> 
          <Route path="/songs/:id" element={<Show />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </div>
    )
  } else {
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

}

export default App;