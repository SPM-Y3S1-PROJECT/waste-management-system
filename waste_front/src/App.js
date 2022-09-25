
import './App.css';
import Slidebar from './components/slidebar';
import Header from './components/header';
import Footer from './components/footer';
import Requestform  from'./components/requestform'
import Category from './components/categoryin';
import SubCategory from './components/subcategoryin';
import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';

function App() {
    return ( 
       
    <div className = "App" >  
   <Router>
 
<Header/>
     <Slidebar/>
    
      <Routes>
          <Route path='/register' element={<Requestform />} />
          <Route path='/category' element={<Category />} />
          <Route path='/subcategory' element={<SubCategory />} />
          
      </Routes>
      <Footer/>
    </Router>
        </div >
       
    );

}

export default App;