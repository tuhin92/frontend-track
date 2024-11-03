import React from 'react';
import USE_Ref from '../Components/USE_Ref';
import Reference from '../Components/Reference';
import GameResult from '../Components/GameResult';

const Home = () => {

    return (
        <div className='max-w-6xl mx-auto'>
            <USE_Ref/>
            <Reference/>
            <GameResult/>
        </div>
    );
};

export default Home;