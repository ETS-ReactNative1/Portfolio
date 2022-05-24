import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
  <React.Fragment>
    <Routes>
      <Route path='/' element={ <Layout/> } />
    </Routes>
  </React.Fragment>
  );
}

export default App;
