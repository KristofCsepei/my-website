import React from "react"

export default function BackBtn(){
    const [isHidden, setIsHidden] = React.useState(true)

    function handleScroll(){
        setIsHidden(window.scrollY < 200)
    }

    React.useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    },[])
    return(
        <button
            className="back-btn"
            style={{display: isHidden ? "none" : "block"}}
            onClick={()=>window.scrollTo({top: 0, behavior:"smooth"})}
        >
            ⮝
        </button>
    )
}