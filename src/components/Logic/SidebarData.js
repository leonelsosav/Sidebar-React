import React from 'react'
import { FaHome } from "react-icons/fa";

const SidebarData = {}

SidebarData.data = [
    {
        titulo: "Home",
        ruta: "/",
        icono: <FaHome />,
        clase: "sidebar-text"
    },
    {
        titulo: "Home2",
        ruta: "/home2",
        icono: <FaHome />,
        clase: "sidebar-text"
    }
]

export default SidebarData;
