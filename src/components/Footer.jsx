import React from "react";
import './FooterStyles.css'
function Footer(){
    let currentYear=new Date()
    currentYear=currentYear.getFullYear()
    return (
        <div className="footer">
            <footer>Copyright @ {`${currentYear}`}</footer>
        </div>
    )
}

export default Footer