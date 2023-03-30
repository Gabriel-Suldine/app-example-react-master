import { House,User,Gear as Settings } from 'phosphor-react'
import './style.css'
export function NavBarMenu() {
    return (
        <>
            <nav className="navbar-menu">
                <a title="Início" href="#">
                    <House/>
                </a>
                <a title="Perfil" href="#">
                    <User/>
                </a>
                <a title="Configurações" href="#">
                    <Settings/>
                </a>
            </nav>
        </>
    )
}