import Logo from "../youtube-logo.png"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" width="50" />
                        
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-md-auto justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contato" className="nav-link">Contato</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/perfil" className="nav-link">Perfil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/favotitos" className="nav-link">Favoritos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}