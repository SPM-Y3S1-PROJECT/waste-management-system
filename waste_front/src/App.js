
import './App.css';

import Slidebar from './components/slidebar';
import Header from './components/header';
import Footer from './components/footer';
import Report from './components/report';
import Requestform  from'./components/requestform'
import Category from './components/categoryin';
import SubCategory from './components/subcategoryin';
import Sidebar from "./components/sidebar/Sidebar"
import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';






function App() {
    return ( 

        
       
    <div className = "App" >  
   <Router>
 
<Header/>
<ToastContainer />
  <Slidebar/>

      <Routes>
          <Route path='/register' element={<Requestform />} />
          <Route path='/category' element={<Category />} />
          <Route path='/subcategory' element={<SubCategory />} />
          <Route path='/report' element={<Report />} />
      </Routes>

      <Footer/>
    </Router>
        </div >
       
    );

}

export default App;