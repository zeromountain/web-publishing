import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/common/Layout';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Routes>
      <Route path='/web-publishing' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
