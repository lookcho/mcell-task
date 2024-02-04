import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import ErrorPage from'./pages/Error';
import Codewords from './pages/Codewords';
import ActionIds from './pages/ActionIds';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/action-ids" element={<ActionIds />} />
          <Route path="/codewords" element={<Codewords />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
