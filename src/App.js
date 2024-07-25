import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Acceuil from './Pages/Acceuil';
import NewsArticle from './Pages/NewsArticle';
import { useState } from 'react';
import NewsData from './Data/News_Data';
import Industry from './Pages/Industry';
import IndustryData from './Data/Industry_Data';
import OfferCard from './Pages/OfferCard';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import PlanIntegration from './Pages/PlanIntegration';
import Skillpage from './Pages/Skillpage';
import Question from './Pages/Question';
import Brouillon from './Brouillon';

function App() {

  const [newsData] = useState(NewsData);
  const [industryData] = useState(IndustryData);
 
  return (
    <div className="App">
    
         <Navbar/>

         <div>
          <Routes>
          
           <Route path="/Acceuil"  element={<Acceuil  />}/>
           <Route path="/Article/:id"  element={<NewsArticle newsData={newsData} />}/>
           <Route path="/Industry/:id/:offer_id"  element={<Industry industryData={industryData}   />}/>
           <Route path="/About"  element={<About  />}/>
           <Route path="/Signup"  element={<Signup  />}/>
           <Route path="/Profile"  element={<Profile  />}/>
           <Route path="/PlanIntegration"  element={<PlanIntegration  />}/>
           <Route path="/Skillpage/:id"     element={<Skillpage/>} />
           <Route path="/Question"     element={<Question/>} />
          
          </Routes>
         </div>
       
    </div>
  );
}

export default App;
