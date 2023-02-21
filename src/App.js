import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Deals from './pages/Deals';
import About from './pages/About';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Header/>}>
        <Route index element = {<Home/>} />
        <Route path='services' element = {<Services/>} />
        <Route path='solutions' element = {<Solutions/>} />
        <Route path='deals' element = {<Deals/>} />
        <Route path='about' element = {<About/>} />
      
      </Route>
    )
  );
  

  return (
    <div className=' font-base mx-auto box-border'>
      <RouterProvider router={router}/>
    
    </div>
  );
};

export default App;
