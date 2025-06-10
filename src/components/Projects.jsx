import { DiGithubBadge } from "react-icons/di";
import Tenzies from "../resources/Tenzies.jpg"
import Memory from "../resources/Memory.jpg"
export default function Projects(){

    return(
        <div id="projects" className="projects-div">
        <h1>Projektjeim</h1>
        <div className="project-outer-div">
            <div className="project-desc">
                <div>
                    <h2>Tenzies</h2>
                    <p>Kockajáték, ahol a cél, hogy minél gyorsabban és kevesebb dobásból gyűjtsünk össze 10 azonos számú kockát.</p>
                    <ul>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                    </ul>
                </div>
                <div className="btn-container">
                    <a 
                        className="demo-btn" 
                        href="https://kristoftenzies.netlify.app/"
                        target="_blank"
                    >
                        Kipróbálom<span>&rarr;</span>
                    </a>
                    <a 
                        className="github-icon" 
                        href="https://github.com/KristofCsepei/Tenzies"
                        target="_blank"
                    >
                        <DiGithubBadge />
                    </a>
                </div>
            </div>
            <a 
                href="https://kristoftenzies.netlify.app/"
                target="_blank"
                className="img-link"
            >
                <img className="project-img" src={Tenzies} alt="Tenzies Dice Game" />
            </a>
            
        </div>
        <div className="project-outer-div">
            <div className="project-desc">
                <div>
                    <h2>Memória</h2>
                    <p>Memória játék, ahol emojikat kell párosítani.
                    Választható emoji kategóriákkal és kártyaszámmal.
                    </p>
                    <ul>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                    </ul>
                </div>
                <div className="btn-container">
                    <a 
                        className="demo-btn" 
                        href="https://kristofmemorygame.netlify.app/"
                        target="_blank"
                    >
                        Kipróbálom <span>&rarr;</span></a>
                    <a 
                        className="github-icon" 
                        href="https://github.com/KristofCsepei/memory-game"
                        target="_blank"
                    >
                        <DiGithubBadge />
                    </a>
                </div>
            </div>
            <a 
                href="https://kristofmemorygame.netlify.app/"
                target="_blank"
                className="img-link"
            
            >
                <img className="project-img" src={Memory} alt="Memory Game" />
            </a>
        </div>
        </div>
    )
}