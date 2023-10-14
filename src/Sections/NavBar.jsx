/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from "react"
import Style from './NavBar.module.css'

const NavBar = () => {
    return <div className={Style.navBar}>
        <h3>Workout Wonder</h3>
        <a href="https://contentlocked.net/cl/i/5kvk3v" target="_blank"><button className={Style.btn}>Get Access!</button></a>
    </div>
}

export default NavBar