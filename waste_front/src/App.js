
import './App.css';
import AddContactus from './components/AddContactus';
import Home from './components/Home';
import Header from './components/Header';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Routes, Router, Route, Outlet, Link } from "react-router-dom";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import ViewallContactus from './components/ViewallContactus';
import AddShoroomitem from './components/AddShowroomitem';
import ViewShowroom from './components/ViewShowroom';
import ShowroomAdmin from './components/ShowroomAdmin';
import ContactDelete from './components/ContactDelete';
import UpdateShowroom from './components/UpdateShowroom';
//chathi
import CollectItem from './components/collectItem';
import ViewAllCollect from './components/viewAllCollect';
import ViewAllRequest from './components/viewAllRequest'





function App() {

        

    return (

      

//----------------------search eke---------------
    
       
    <BrowserRouter>

        <Header/>
        
        <Routes>
          <Route exact path="/" element={<Home/>} />             
          <Route path="/add" element={<AddContactus/>} />
          <Route path="/view" element={<ViewallContactus/>} />
          <Route path="/addshow" element={<AddShoroomitem/>} />
          <Route path="/showuser" element={<ViewShowroom/>} />
          <Route path="/showadmin" element={<ShowroomAdmin/>} />
          
          <Route path="/delete/:id" element={<ContactDelete/>} />
          
          <Route path="/updateshow/:id" element={<UpdateShowroom/>} />


          <Route path="/addcollectitem" element={<CollectItem/>} />
        <Route path="/viewcollectitem" element={<ViewAllCollect/>} />
        <Route path="/req" element={<ViewAllRequest/>} />


          
          
        </Routes>
    </BrowserRouter>
    
    );

}

export default App;