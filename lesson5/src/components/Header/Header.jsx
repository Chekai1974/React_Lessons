import React, { useState } from 'react'
import logo from "../../images/logo.svg"
import arrow from "../../images/icon-arrow-down.svg"

function Header() {
    // для клика на бургер меню Андроид 
    const [menuBtnClicked, setMenuClicke] = useState(false)
    const handleMenuClick = () => {
        setMenuClicke(true)
    }
    const handleXClicked = () => {
        setMenuClicke(false)
    }
    // ______________


    //для Feature dropDown
    const [featureClicked, setFeatureClicked] = useState(false)
    const handleFeatureClick = () => {
        setFeatureClicked((prevFeature)=> !prevFeature)
    }
    // ______________



    //для Company dropDown
    const [companyClicked, setCompanyClicked] = useState(false)
    const handleСompanyClick = () => {
        setCompanyClicked((prevCompany)=> !prevCompany)
    }
    // ______________   




    return (
        <header>
            <img src={logo} alt="logo" />
            <button className="burger-menu" onClick={handleMenuClick}></button>
            <nav className='active-nav-menu' style={menuBtnClicked ? {display: "flex"} : {} }>
                <button className='x-btn' onClick={handleXClicked}></button>
                <div className="nav-links">
                    <div className="feature-container">
                        <div className="dropdowm-link" onClick={handleFeatureClick}>
                            <a href="#">Features</a>
                            <img src={arrow} alt="arrow-down" className='arrow-down' style={featureClicked ? {transform: "rotate(180deg)"} : {}} />
                        </div>

                        <div className='feature-wrapper' onClick={featureClicked ? { display: "flex" } : {}}>
                            <a href="#" className="icon-todo">Todo List</a>
                            <a href="#" className="icon-calendar">Calendar</a>
                            <a href="#" className="icon-reminders">Reminders</a>
                            <a href="#" className="icon-planning">Planning</a>
                        </div>
                    </div>

                    <div className="company-container">
                        <div className="dropdown-link" onClick={handleСompanyClick}>
                            <a href="#">Company</a>
                            <img src={arrow} alt="arrow-down" className='arrow-down' style={companyClicked ? {transform: 'rotate(180deg)'} : {}}/>
                        </div>
                        <div className='company-wrapper' style={companyClicked ? { display: "flex" } : {}}>
                            <a href="#">Hisory</a>
                            <a href="#">Our Team</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>
                    <a href="#">Careers</a>
                    <a href="#">About</a>
                </div>
                <div className="nav-btns">
                    <button className='login'>Login</button>
                    <button className='reg'>Register</button>
                </div>
            </nav>
        </header>
    )
}

export default Header