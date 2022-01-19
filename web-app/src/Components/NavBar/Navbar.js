import React, { useState,useEffect } from 'react';
import './Navbar.scss';
import { useNavigate } from "react-router-dom";

function Navbar(){
    //instantiatiang navigate 
    const navigate = useNavigate();
    //Creating usestate to set username to display
    const [userName, setUserName] = useState('');
    //Creating funcation to delete localstorage item when clicked on log out
    const deleteLocalStorage = () => {
        localStorage.removeItem("userInfo");
        navigate("/");
    }
    // using useEffect to display username and navigate to sign-in page if logged out
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if(!userInfo){
            navigate('/')
        } else {
            setUserName(JSON.parse(localStorage.getItem("userInfo")).user.name);
        }
    },[])

    return (
        <div className="Navbar">
            <h2 className="Navbar-Content">Trackify</h2>
            <h2 className="Navbar-Content">Hello {userName} </h2>
            <button onClick={deleteLocalStorage}>Log out</button>
        </div>
    )
}

export default Navbar;