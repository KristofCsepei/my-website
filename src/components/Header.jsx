import React from "react"
import Navbar from "./Navbar"

export default function Header({}){
    return (
        <header>
            <div className="intro-div">           
                <h1>Sziasztok, Kristóf vagyok! </h1>
                <p>Junior frontend fejlesztő, aki az első szakmai lehetőségét keresi.</p>
            </div>                
            <Navbar />         
        </header>
    )
}