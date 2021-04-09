import { Link } from 'react-router-dom'
import SidebarData from '../Logic/SidebarData'
import '../Style/sidebar.css'
import { useState, useEffect } from 'react'
import { IconContext } from 'react-icons'
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
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={sidebar ? 'menu active' : 'menu'}>
                    <ul>
                        {SidebarData.data.map((value, index) => {
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
