import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex items-start justify-start w-full'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;