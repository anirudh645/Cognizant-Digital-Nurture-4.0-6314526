import React from 'react';
import ListOfPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import { OddPlayers, EvenPlayers } from './OddEvenPlayers';
import ListOfIndianPlayers from './ListOfIndianPlayers';
import { players, IndianPlayers } from './playerData';

const Home = ({ flag }) => {
    if(flag === true){
        return(
            <div>
                <h1>List Of Players</h1>
                <ListOfPlayers players={players}/>
                <hr/>
                <h1>List Of Players Having Scores Less than 70</h1>
                <Scorebelow70 players={players}/>
            </div>
        )
    }else{
        return(
            <div>
                <div>
                    <h1>Indian Team</h1>
                    <h1>Odd Players</h1>
                    {OddPlayers(IndianPlayers)}
                </div>
                <hr/>
                <div>
                    <h1>Even Players</h1>
                    {EvenPlayers(IndianPlayers)}
                </div>
                <hr/>
                <div>
                    <h1>List of Indian Players Merged</h1>
                    <ListOfIndianPlayers IndianPlayers={IndianPlayers}></ListOfIndianPlayers>
                </div>
            </div>
        )
    }
};

export default Home;
