import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Education.css';

const Education = () => {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/education')
            .then(res => {
                setEducation(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Failed to fetch education data.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="education-container">
            <div className="education-header">
                <h1>My Education</h1>
            </div>

            {education.map((edu) => (
                <div key={edu._id} className="education-card">
                    {/* Degree Section */}
                    <div className="education-degree">
                        <h3>{edu.degree}</h3>
                        <p>{edu.institution}</p>
                        <p className="education-duration-location">
                            <span>{edu.duration}</span> | 
                            <span>{edu.location}</span>
                        </p>
                    </div>

                    <div className="education-details">
                        <p><strong>Field of Study:</strong> {edu.field_of_study}</p>
                        <p><strong>CGPA:</strong> {edu.cgpa}</p>
                    </div>

                    {/* High School Section */}
                    <div className="education-high-school">
                        <h4>High School</h4>
                        <p>{edu.high_school?.school_name} ({edu.high_school?.year_range})</p>
                        <p>{edu.high_school?.location}</p>
                        <p><strong>Percentage:</strong> {edu.high_school?.percentage}</p>
                    </div>

                    {/* Additional High School Info */}
                    {edu.additional_high_school_info && (
                        <div className="education-additional-info">
                            <h4>Higher Secondary</h4>
                            <p>{edu.additional_high_school_info.school_name}</p>
                            <p><strong>Percentage:</strong> {edu.additional_high_school_info.percentage}</p>
                            <p>{edu.additional_high_school_info.location}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Education;
