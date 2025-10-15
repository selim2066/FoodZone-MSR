import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Header from '../../component/Navbar/header/Header';
import Menu from '../../component/Navbar/Menu/Menu';
import FoodDisplay from '../../component/Navbar/foodDisplay/FoodDisplay';

function Home() {
    return (
        <div className='space-y-10'>
            <Navbar/>
            <Header></Header>
            <Menu/>
            <FoodDisplay/>
            
        </div>
    );
}

export default Home;