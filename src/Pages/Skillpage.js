import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Skillpage() {
    const [trainingData, setTrainingData] = useState([]);
    const [skill, setSkill] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams(); // Get the id parameter from the URL

    useEffect(() => {
        const fetchTrainingData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/training'); // Fetch all trainings
                setTrainingData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching training data:', error);
                setError('Failed to fetch training data.');
                setLoading(false);
            }
        };

        fetchTrainingData();
    }, []);

    useEffect(() => {
        if (!loading && trainingData.length > 0) {
            const foundSkill = trainingData.find((item) => item.Training_id === id); // Find the specific training by id
            setSkill(foundSkill || null);
        }
    }, [trainingData, id, loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!skill) {
        return <div>Skill not found</div>;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ marginTop: "30px", textAlign: "center" }}>{skill.Skill}</h1>

            <table style={{ marginTop: "30px" }}>
                <thead>
                <tr>
                    <th>Skills</th>
                    <th>Link</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {skill.parts.map((part, index) => (
                    <tr key={index}>
                        <td>{part.name}</td>
                        <td><a href={part.link} style={{ textDecoration: "none", color: "black" }}> study more about {part.name} </a></td>
                        <td>
                            <button style={{ width: "150px", height: "50px", backgroundColor: "#15365F", color: "white", borderRadius: "10px" }}>Not mastered</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button style={{ width: "250px", height: "60px", backgroundColor: "#15365F", color: "white", borderRadius: "10px", marginTop: "20px" }}>Still in Progress</button>

            <div style={{ width: "1000px", height: "2px", backgroundColor: "#ff7514", marginTop: "30px" }}></div>
            <h3 style={{ marginTop: "30px", color: "#15365F" }}>Resumy</h3>
            <p style={{ marginTop: "30px", width: "1000px" }}>{skill.resumy}</p>
        </div>
    );
}

export default Skillpage;
