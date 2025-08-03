import React from 'react';

// ES6 Features: Arrow function and map() method
const ListOfPlayers = ({ players }) => {
    return (
        <div>
            {players.map((item) => (
                <div key={item.id}>
                    <li>Mr. {item.name} <span> {item.score} </span></li>
                </div>
            ))}
        </div>
    );
};

export default ListOfPlayers;
