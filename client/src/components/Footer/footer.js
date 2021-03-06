import React from 'react'

var style = {
    // backgroundColor: "#F8F8F8",
    backgroundColor: "rgb(202,211,226, .6)",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "65px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            {/* <div style={phantom} /> */}
            <div style={style}>
                Created By: <a href="https://www.linkedin.com/in/meguel-chavez/" target="_blank"> Meguel Chavez</a> |
                <a href="https://github.com/mc4tech" target="_blank"> Github </a>

            </div>
        </div>
    )
}

export default Footer