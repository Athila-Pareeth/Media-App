
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { FaMusic } from "react-icons/fa6";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import WatchHistory from './Pages/WatchHistory';
import PageNotFound from './Pages/PageNotFound';
function App() {

  return (
    <>
    
     <Header/>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/Home'element={<Home/>}/>
      <Route path='/WatchHistory' element={<WatchHistory/>}/>
      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    
     <Footer/>
    </>
  )
}

export default App
