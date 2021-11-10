import React from 'react'
import { Route, Routes } from "react-router";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Root from "./pages/Root/Root";
import VerticalList from './pages/verticalList/verticalList';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/vertical-list" element={<VerticalList />} />
      </Routes>
    </div>
  );
}

export default App;
