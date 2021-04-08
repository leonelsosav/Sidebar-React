import React from 'react'
import Logo from '../assets/logo.png'
import './designs/TopPart.css'

const TopPart = ({ usuario, titulo, bntNuevoTxt }) => {
    return (
        <>
            <img src={Logo} alt="logo" className="logo" />
            <div className="divUsuario">
                <span className="saludo">Bienvenido: {usuario}</span>
            </div>
            <br/>
            <h1 className="titulo">{titulo}</h1>
            <br/>
            <button className="btnNuevo">{bntNuevoTxt}</button>
        </>
    )
}

export default TopPart
