import React from "react";

// ES6 Features: Arrow function and destructuring
export const OddPlayers = (players) => {
    // Destructuring: Extract first, third, fifth players (odd positions)
    const [first, , third, , fifth] = players;
    
    return (
        <div>
            <li>First: {first}</li>
            <li>Third: {third}</li>
            <li>Fifth: {fifth}</li>
        </div>
    );
};

// ES6 Features: Arrow function and destructuring
export const EvenPlayers = (players) => {
    // Destructuring: Extract second, fourth, sixth players (even positions)
    const [, second, , fourth, , sixth] = players;
    
    return (
        <div>
            <li>Second: {second}</li>
            <li>Fourth: {fourth}</li>
            <li>Sixth: {sixth}</li>
        </div>
    );
};
