import React from 'react'
import { FaUserTie, FaUsers, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";

export const SidebarData = [
    {
        titulo: "Empleados",
        ruta: "/",
        icono: <FaUserTie/>,
        clase: "sidebar-text" 
    },
    {
        titulo: "Clientes",
        ruta: "/clientes",
        icono: <FaUsers/>,
        clase: "sidebar-text" 
    },
    {
        titulo: "Productos",
        ruta: "/productos",
        icono: <FaShoppingCart/>,
        clase: "sidebar-text" 
    },
    {
        titulo: "Cerrar Sesion",
        ruta: "/",
        icono: <FaSignOutAlt/>,
        clase: "sidebar-text",
        click: () => {console.log("hola")} 
    }
]
