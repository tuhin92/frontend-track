import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { ThemeContext } from '../Context/ThemeProvider';

const Main = () => {
    const {dark, setDark} = useContext(ThemeContext);
    console.log(dark );

    return (
        <div className={`${dark ? "bg-black" : "bg-white"}`}>
            <Navbar></Navbar>
            <button className='btn btn-primary' onClick={()=> setDark(!dark)}>Theme</button>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;