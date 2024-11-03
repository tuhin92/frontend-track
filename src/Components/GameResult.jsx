// GameResult.js
import React from 'react';
import Avatar from './Avatar';
import withBorder from './WithBorder';

// Capitalize the HOC-wrapped component
const AvatarWithBorder = withBorder(Avatar);

const GameResult = () => {
    return (
        <div className='my-6 flex justify-center gap-6'>
            <Avatar />            {/* Standard Avatar */}
            <AvatarWithBorder />   {/* Avatar with Border */}
            <Avatar />            {/* Standard Avatar */}
            <Avatar />            {/* Standard Avatar */}
        </div>
    );
};

export default GameResult;
