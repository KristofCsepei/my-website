import React from "react"

export default function Navbar(){

    return (
        <nav>
            <ul className="ul-nav">
                <li className="li-nav">
                    <a href="#projects">Projektjeim</a>
                </li>
                <li className="li-nav">
                    <a href="#aboutMe">Rólam</a>
                </li>
                <li className="li-nav">
                    <a href="#contact">Elérhetőség</a>
                </li>
            </ul>
        </nav>
    )
}