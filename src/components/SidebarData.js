import React from 'react'
import { FaUserTie, FaUsers, FaShoppingCart, FaSignOutAlt, FaTools, FaBookOpen, FaMoneyBillWave, FaStore } from "react-icons/fa";

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
        titulo: "Servicios",
        ruta: "/servicios",
        icono: <FaTools/>,
        clase: "sidebar-text" 
    },
    {
        titulo: "Citas",
        ruta: "/citas",
        icono: <FaBookOpen/>,
        clase: "sidebar-text" 
    },
    {
        titulo: "Caja",
        ruta: "/caja",
        icono: <FaMoneyBillWave/>,
        clase: "sidebar-text" 
    },
    {
        titulo: "Venta",
        ruta: "/venta",
        icono: <FaStore/>,
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
