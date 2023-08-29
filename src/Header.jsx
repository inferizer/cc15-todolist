import { FaHome } from "react-icons/fa";

function Header () {
    return (
        <header className="header">
          <div className="header__logo">
            <FaHome />
          </div>
          <div className="header__text">
            <h1>Todoist</h1>
          </div>
          <div className="header__search"></div>
          <input />
        </header>
    )
}

export default Header;