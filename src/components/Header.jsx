import "../index.css"
import logo from "../assets/logo.png"

export default function Header(){
    return(
        <nav className="navbar">
          <img src={logo} alt="logo" />
          <p className="header-text">fun places to visit in Lagos.</p>
        </nav>
    )
}