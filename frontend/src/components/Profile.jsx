import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/profiles/1/')
            .then(response => setProfile(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="profile-container">
            {profile ? (
                <>
                    <img src={`http://localhost:8000${profile.profile_image}`} alt="Profile" className="profile-image" />
                    <h1>{profile.name}</h1>
                    <h2>{profile.role}</h2>
                    <p>{profile.about}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Phone:</strong> {profile.phone}</p>
                    <p><strong>Location:</strong> {profile.location}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;