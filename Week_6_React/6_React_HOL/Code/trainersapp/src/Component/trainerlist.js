import React from 'react';
import { Link } from 'react-router-dom';

const TrainersList = ({ trainers }) => {
    return (
        <div>
            <h3>Trainers List</h3>
            <ul>
                {trainers.map((trainer) => (
                    <li key={trainer.trainerId}>
                        <Link to={`/trainer/${trainer.trainerId}`} style={{ textDecoration: 'underline', color: '#007bff' }}>
                            {trainer.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainersList;