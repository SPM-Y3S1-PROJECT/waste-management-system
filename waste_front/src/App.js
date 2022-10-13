
import './App.css';
import Slidebar from './components/slidebar';
import Header from './components/header';
import Footer from './components/footer';
import Requestform  from'./components/requestform'
import Category from './components/categoryin';
import SubCategory from './components/subcategoryin';
import Adminhome from "./components/AdminHome";
import AddUser from './components/userdetails/AddUser';
import AddAdmin from './components/admindetails/AddAdmin';
import EditAdmin from './components/admindetails/EditAdmin';
import UserProfile from './components/userdetails/UserProfile';
import FooterBottom from "./components/FooterBottom";
import Header from "./components/Header";
import Report from "./components/admindetails/Report";
import ViewAdmin from "./components/admindetails/ViewAdmin";
import Search from "./components/Search";
import EditUser from './components/userdetails/EditUser';
import Login from './components/userdetails/Login';
import TopNav from "./components/TopNav";
import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';

function App() {
    return ( 
       
    <div className = "App" >  
   <Router>
< TopNav/>
< Header/>
<Header/>
     <Slidebar/>
    
      <Routes>
         <Route path='/register' element={<Requestform />} />
         <Route path='/category' element={<Category />} />
         <Route path='/subcategory' element={<SubCategory />} />
         <Route path="/" element={<Adminhome />} />
         <Route path="/addUser" element={<AddUser />} />
         <Route path="/login" element={<Login />} />
         <Route path="/addAdmin" element={<AddAdmin />} />
         <Route path="/report" element={<Report />} />
         <Route path="/profile/:id" element={<UserProfile />} />
         <Route path="/updateUser/:id" element={<EditUser />} />
         <Route path="/view" element={<ViewAdmin />} />
         <Route path="/updateAdmin/:id" element={<EditAdmin />} />
          
      </Routes>
      < FooterBottom/>
      <Footer/>
             
    </Router>
        </div >
       
    );

}

export default App;
