import React from 'react';
import Navbar from '../../../component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Auth;