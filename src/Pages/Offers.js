import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OfferCard from './OfferCard';

function Offers() {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/offers'); // Update URL based on your API
                setOffers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching offers:', error);
                setError('Error fetching offers');
                setLoading(false);
            }
        };

        fetchOffers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', marginTop: '50px', marginRight: '20px', alignItems: 'center' }}>
            <h1 style={{ color: '#002857' }}>Offers</h1>
            {offers.map((offer) => (
                <OfferCard
                    key={offer.offer_id} // Added unique key for each OfferCard
                    id={offer.offer_id}
                    name={offer.name}
                    plant={offer.Plant}
                    email={offer.email}
                />
            ))}
        </div>
    );
}

export default Offers;
