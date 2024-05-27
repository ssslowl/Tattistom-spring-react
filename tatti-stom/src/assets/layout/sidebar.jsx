import React, { useEffect, useState } from 'react'
import { SidebarData } from './sidebarData'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'
import styles from '../css/sidebar.module.css'



function Sidebar() {
const [link, setlink] = useState(window.location.pathname);

  return (
    <div className={styles.sidebar}>
        
        <div className={styles.logo}>
          <img className={styles.logoIcon} src={logo}/>
          <span>Tatti stom</span>
        </div>



        <ul>
              {SidebarData.map((val, key) =>{
                return <li key={key} onClick={() => setlink(val.link)}>
                  <div id = {styles.selected} style={link === val.link ? {width: '10px'} : {width: '0px'}}></div>

                  <Link to={val.link} className = {styles.page}>
                    <div className={styles.icon}>{val.icon}</div>
                    <div className={styles.title}>{val.title}</div>
                  </Link>
                </li>;
              })}
        </ul>
    </div>
  )
}

export default Sidebar