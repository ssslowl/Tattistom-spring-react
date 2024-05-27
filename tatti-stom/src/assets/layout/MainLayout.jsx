import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import styles from '../css/Layout.module.css';



const MainLayout = () => {

    
    useEffect(() => {

        document.body.className = styles.layout;
        document.getElementById('root').className = styles.layout;
    }, []);


    return (
        <>
           <div className={styles.MainLayout}>
                <Sidebar />
                <div className={styles.content}>
                    <Outlet />
                </div>
           </div>
        </>
    );
};

export default MainLayout;
