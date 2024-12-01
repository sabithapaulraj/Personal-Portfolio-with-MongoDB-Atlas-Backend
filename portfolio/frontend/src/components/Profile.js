import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Profile.css';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/profile');
                setProfile(res.data);
            } catch (err) {
                console.error('Error fetching profile:', err);
                setError('Failed to fetch profile data.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!profile) {
        return <div>No profile data found.</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img
                    src={profile.photo || 'https://via.placeholder.com/150'} // Replace with your image field
                    alt={`${profile.name}'s Avatar`}
                    className="profile-photo"
                />
                <h1 className="profile-name">{profile.name}</h1>
                <p className="profile-bio">{profile.bio}</p>
                <div className="profile-links">
                    {profile.linkedin && (
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-linkedin"
                        >
                            LinkedIn
                        </a>
                    )}
                    {profile.github && (
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-github"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
