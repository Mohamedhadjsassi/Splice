import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Acceuil from './Pages/Acceuil';
import NewsArticle from './Pages/NewsArticle';
import Industry from './Pages/Industry';
import OfferCard from './Pages/OfferCard';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import PlanIntegration from './Pages/PlanIntegration';
import Skillpage from './Pages/Skillpage';
import Question from './Pages/Question';
import NewPlan from './Pages/NewPlan';
import Brouillon from './Brouillon';
import './App.css';

function App() {
    const [newsData, setNewsData] = useState([]);
    const [industryData, setIndustryData] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/news');
                setNewsData(response.data);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        const fetchIndustryData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/industry');
                setIndustryData(response.data);
            } catch (error) {
                console.error('Error fetching industry data:', error);
            }
        };

        fetchNewsData();
        fetchIndustryData();
    }, []);

    return (
        <div className="App">
            <Navbar />

            <div>
                <Routes>
                    <Route path="/Acceuil" element={<Acceuil />} />
                    <Route path="/Article/:id" element={<NewsArticle newsData={newsData} />} />
                    <Route path="/Industry/:id/:offer_id" element={<Industry industryData={industryData} />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/PlanIntegration" element={<PlanIntegration />} />
                    <Route path="/Skillpage/:id" element={<Skillpage />} />
                    <Route path="/Question" element={<Question />} />
                    <Route path="/add-plan" element={<NewPlan />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
