import React from 'react'
import Sidebar from '../components/Sidebar'
import TopPart from '../components/TopPart'

const Empleados = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="Empleados">
                <TopPart usuario={"Pablo"} titulo={"Empleados"} bntNuevoTxt={"Nuevo empleado"}></TopPart>
            </div>
        </>
    )
}

export default Empleados
