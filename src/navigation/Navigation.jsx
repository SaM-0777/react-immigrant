import { Routes, Route } from 'react-router-dom';

import { Home, Country } from '../pages';


function Navigation({ }) {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/country' element={<Country />} />
    </Routes>
  )
}

export default Navigation