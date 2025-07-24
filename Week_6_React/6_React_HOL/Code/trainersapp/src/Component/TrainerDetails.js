import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TrainerDetail = ({ trainers }) => {
    const { id } = useParams();
    const trainer = trainers.find(t => t.trainerId === id);

    if (!trainer) {
        return (
            <div>
                <h2>Trainer Not Found</h2>
                <p>The trainer with ID "{id}" was not found.</p>
                <Link to="/trainers">Back to Trainers List</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Trainer Details</h2>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '500px' }}>
                <p><strong>ID:</strong> {trainer.trainerId}</p>
                <p><strong>Name:</strong> {trainer.name}</p>
                <p><strong>Email:</strong> {trainer.email}</p>
                <p><strong>Phone:</strong> {trainer.phone}</p>
                <p><strong>Technology:</strong> {trainer.technology}</p>
                <p><strong>Skills:</strong></p>
                <ul>
                    {trainer.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Link to="/trainers">Back to Trainers List</Link>
            </div>
        </div>
    );
};

export default TrainerDetail;
