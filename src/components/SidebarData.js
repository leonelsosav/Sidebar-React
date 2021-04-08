import React from 'react'
import { FaUserTie, FaUsers } from "react-icons/fa";

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
    }
]
