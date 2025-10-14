import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Header from '../../component/Navbar/header/Header';
import Menu from '../../component/Navbar/Menu/Menu';

function Home() {
    return (
        <div className='space-y-10'>
            <Navbar/>
            <Header></Header>
            <Menu/>
            
        </div>
    );
}

export default Home;