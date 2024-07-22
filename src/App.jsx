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
import Home from './Components/Home';
import Form from './Components/Form';

// MOBILE COMPONENTS
import MobileNav from './mobile/Components/MobileNav';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [genreOption, setGenreOption] = useState('All Songs');

  const mobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  if(mobile) {
    return(
      <div className='Mobile'>
        <MobileNav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/songs" element={<Index setGenreOption={setGenreOption} genreOption={genreOption}/>}/> 
          <Route path="/songs/:id" element={<Show />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </div>
    )
  } else {
    return (
     <div className="App">
        <NavBar setGenreOption={setGenreOption} showForm={showForm} setShowForm={setShowForm}/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index genreOption={genreOption} showForm={showForm} setShowForm={setShowForm} />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main> 
     </div>
    )
  }

}

export default App;