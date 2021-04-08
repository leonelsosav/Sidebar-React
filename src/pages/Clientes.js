import Sidebar from '../components/Sidebar'
import TopPart from '../components/TopPart'

const Clientes = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="Clientes">
            <TopPart usuario={"Pablo"} titulo={"Clientes"} bntNuevoTxt={"Nuevo cliente"}></TopPart>
            </div>
        </>
    )
}

export default Clientes
