import Profile from "../resources/aboutme.jpg"
export default function AboutMe(){
    return (
        <div id="aboutMe" className="about-me-div">
            <h1>Rólam</h1>
            <div className="about-me-card">
                <img className="profile-pic" src={Profile} alt="profile-picture" />
                <p>
                    Csepei Kristóf vagyok, junior frontend fejlesztő Budapestről.
                    2023 óta tanulok programozást szabadidőmben azzal a céllal, hogy új karriert kezdhessek mint programozó.
                </p>
                <p>
                    Szeretem a kreatív gondolkodást igénylő feladatokat, és nyitott vagyok az új technológiák elsajátítására.
                </p>
                <p>Amikor nem programozok, szabadidőmben sorozatokat nézek, társasozok, videójátékokkal játszom, vagy kirándulok a feleségemmel.</p>
            </div>
        </div>
    )
}