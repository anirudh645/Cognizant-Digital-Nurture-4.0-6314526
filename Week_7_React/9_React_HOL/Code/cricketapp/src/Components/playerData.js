// ES6 Features: Array declarations and ES6 const
const players = [
    { id: 1, name: "Virat Kohli", score: 85 },
    { id: 2, name: "Rohit Sharma", score: 92 },
    { id: 3, name: "KL Rahul", score: 68 },
    { id: 4, name: "Rishabh Pant", score: 45 },
    { id: 5, name: "Hardik Pandya", score: 78 },
    { id: 6, name: "Ravindra Jadeja", score: 55 },
    { id: 7, name: "Mohammed Shami", score: 35 },
    { id: 8, name: "Jasprit Bumrah", score: 25 },
    { id: 9, name: "Yuzvendra Chahal", score: 42 },
    { id: 10, name: "Bhuvneshwar Kumar", score: 38 },
    { id: 11, name: "Shikhar Dhawan", score: 74 }
];

// ES6 Features: const arrays for T20 and Ranji Trophy players
const T20Players = ["Virat Kohli", "Rohit Sharma", "KL Rahul"];
const RanjiTrophyPlayers = ["Hardik Pandya", "Ravindra Jadeja", "Mohammed Shami"];

// ES6 Features: Spread operator for merging arrays
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

export { players, T20Players, RanjiTrophyPlayers, IndianPlayers };
