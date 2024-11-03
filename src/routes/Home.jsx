import React from 'react';
import USE_Ref from '../Components/USE_Ref';
import Reference from '../Components/Reference';
import GameResult from '../Components/GameResult';
import UseContainer from '../Components/UseContainer';

const Home = () => {

    return (
        <div className='max-w-6xl mx-auto'>
            <USE_Ref/>
            <Reference/>
            <GameResult/>
            <UseContainer/>
        </div>
    );
};

export default Home;