import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from './views/Main';
import Update from './views/Update';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Update/>} path="/author/:id/edit"/>
        <Route element={<Create/>} path="/new/"/>
    </Routes>
    </div>
  );
}

export default App;
