import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewPlan() {
    const [formData, setFormData] = useState({
        field: '',
        Skill: '',
        Training_id: '',
        parts: [{ name: '', link: '' }],
        resumy: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (name.startsWith('part')) {
            const newParts = [...formData.parts];
            const [field, partIndex, fieldName] = name.split('_');
            newParts[parseInt(partIndex)][fieldName] = value;
            setFormData({ ...formData, parts: newParts });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleAddPart = () => {
        setFormData({
            ...formData,
            parts: [...formData.parts, { name: '', link: '' }]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post('http://localhost:5000/api/training', formData);
            navigate('/PlanIntegration'); // Redirect on success
        } catch (error) {
            console.error('Error submitting the form:', error);
            setError('Failed to submit the form. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="new-plan-container">
            <h1>Create New Plan</h1>
            <form onSubmit={handleSubmit} className="new-plan-form">
                <div className="form-group">
                    <label htmlFor="field">Field:</label>
                    <input
                        type="text"
                        id="field"
                        name="field"
                        value={formData.field}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Skill">Skill:</label>
                    <input
                        type="text"
                        id="Skill"
                        name="Skill"
                        value={formData.Skill}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Training_id">Training ID:</label>
                    <input
                        type="text"
                        id="Training_id"
                        name="Training_id"
                        value={formData.Training_id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <h3>Parts</h3>
                {formData.parts.map((part, index) => (
                    <div key={index} className="form-group">
                        <label htmlFor={`part_${index}_name`}>Part {index + 1} Name:</label>
                        <input
                            type="text"
                            id={`part_${index}_name`}
                            name={`part_${index}_name`}
                            value={part.name}
                            onChange={(e) => handleChange(e, index)}
                            required
                        />
                        <label htmlFor={`part_${index}_link`}>Part {index + 1} Link:</label>
                        <input
                            type="url"
                            id={`part_${index}_link`}
                            name={`part_${index}_link`}
                            value={part.link}
                            onChange={(e) => handleChange(e, index)}
                            required
                        />
                    </div>
                ))}
                <button
                    type="button"
                    className="add-part-button"
                    onClick={handleAddPart}
                >
                    + Add New Part
                </button>
                <div className="form-group">
                    <label htmlFor="resumy">Resumy:</label>
                    <textarea
                        id="resumy"
                        name="resumy"
                        value={formData.resumy}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="submit-button"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
}

export default NewPlan;
