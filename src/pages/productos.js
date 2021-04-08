import React from 'react'
import Sidebar from '../components/Sidebar'
import TopPart from '../components/TopPart'


const Productos = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="Productos">
            <TopPart usuario={"Pablo"} titulo={"Productos"} bntNuevoTxt={"Nuevo producto"}></TopPart>
            </div>
        </>
    )
}

export default Productos
