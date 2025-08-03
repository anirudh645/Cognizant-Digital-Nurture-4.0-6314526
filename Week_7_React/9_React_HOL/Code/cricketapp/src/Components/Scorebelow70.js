import React from "react";

// ES6 Features: Arrow function and filter() method
const Scorebelow70 = ({ players }) => {
    // Filter players with scores below 70 using arrow functions
    const players70 = [];
    players.map((item) => {
        if(item.score <= 70) {
            players70.push(item);
        }
    });
    
    return (
        <div>
            {players70.map((item) => (
                <div key={item.id}>
                    <li>Mr. {item.name} <span> {item.score} </span></li>
                </div>
            ))}
        </div>
    );
};

export default Scorebelow70;
