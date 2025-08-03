import React from "react";

// ES6 Features: Arrow function component
const ListOfIndianPlayers = ({ IndianPlayers }) => {
    return (
        <div>
            {IndianPlayers.map((player, index) => (
                <li key={index}>{player}</li>
            ))}
        </div>
    );
};

export default ListOfIndianPlayers;
