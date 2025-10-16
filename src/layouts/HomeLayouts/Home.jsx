import React, { useState } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Header from '../../component/Navbar/header/Header';
import Menu from '../../component/Navbar/Menu/Menu';
import FoodDisplay from '../../component/Navbar/foodDisplay/FoodDisplay';
import Footer from '../../component/Navbar/footer/Footer';



function Home() {
    const [category, setCategory]=useState("All")
  console.log(category)
    return (
        <div className='space-y-10'>
            <Navbar/>
            <Header></Header>
            <Menu setCategory={setCategory} category={category}/>
            <FoodDisplay category={category}/>
            <Footer/>
            
        </div>
    );
}

export default Home;