import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './sidebar.css'
import { useState, useEffect } from 'react'
import { IconContext } from 'react-icons'
import Logo from '../assets/logo.png'
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(window.innerWidth > 1000);

    const handleResize = () => {
        window.innerWidth <= 1000 ? setSidebar(false) : setSidebar(true);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const toggleSidebar = (() => setSidebar(!sidebar))
    return (
        <>
            <IconContext.Provider value={{ color: '#060b26' }}>
                <div className="header">
                    <Link to="#" className="menu-bars" onClick={toggleSidebar}>
                        <FaIcons.FaBars />
                    </Link>
                    <h1 className="titulo">Kasterz</h1>
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={sidebar ? 'menu active' : 'menu'}>
                    <ul>
                        {SidebarData.map((value, index) => {
                            return (
                                <li key={index} className={value.clase}>
                                    <Link to={value.ruta}>
                                        {value.icono}
                                        <span>{value.titulo}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
