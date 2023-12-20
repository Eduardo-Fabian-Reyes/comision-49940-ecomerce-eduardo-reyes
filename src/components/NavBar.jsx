import React from "react";
import CartWidget from "./CartWidget";
import logo from "../images/logo-home.png";


const NavBar = () => {
    const headerStyle = {
        color: '#13101C',
        backgroundColor: '#E5AFE3',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10rem',
    }
    const logoHeader = {
        paddingLeft: '30px',
        flex: '20%',
        width: '20%',
        height: '10%',
    }
    const navStyleCont = {
        display: 'flex',
    }
    const ulStyle = {
        display: 'flex',
        gap: '4rem',
        textDecoration: 'none',
        listStyle: 'none',
        paddingLeft: '0px',
    }
    const liStyle = {
        cursor: 'pointer',
    }
    return(
        <div>
            <header style={headerStyle}>
                <img style={logoHeader} src={logo} alt="" />
                <nav style={navStyleCont}>
                    <ul style={ulStyle}>
                        <li style={liStyle} ><a href="#"></a>Vinilos</li>
                        <li style={liStyle} ><a href="#"></a>CD's</li>
                        <li style={liStyle} ><a href="#"></a>Audio</li>
                        <li style={liStyle} ><a href="#"></a>Accesorios</li>
                    </ul>
                </nav>

                <CartWidget/>
            </header>
        </div>
    )
}

export default NavBar