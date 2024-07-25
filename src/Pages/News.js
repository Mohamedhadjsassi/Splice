import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/news'); // Update URL based on your API
                setNews(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setError('Error fetching news');
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={{ width: '1400px', display: 'flex', gap: '20px', flexDirection: 'column', marginTop: '50px', marginLeft: '20px', alignItems: 'center' }}>
            <h1 style={{ color: '#002857' }}>News</h1>
            {news.map((item) => (
                <NewsCard
                    key={item.id} // Added unique key for each NewsCard
                    title={item.name}
                    description={item.description}
                    image={item.image}
                    id={item.id}
                />
            ))}
        </div>
    );
}

export default News;
