import React from "react"

const Info = () => {
    return(
        <div className="info">
            <img className="info__photo" src="../Images/DV.jpg" alt=""/>
            <h1 className="info__title">Darth Vader</h1>
            <h3 className="info__subtitle">Frontend Developer</h3>
            <a className="info__link" href="">deathStar.dark.side</a>
            <div className="info__button">
                <button className="info__button--email"><img src="../Images/mail_button_icon.png" alt=""/>Email</button>
                <button className="info__button--ld"><img src="../Images/ld_button_icon.png" alt=""/>LinkedIn</button>
            </div>
        </div>
    )
}

export default Info
