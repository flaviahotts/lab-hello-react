import "./navbar-style.css";
import ironhackLogo from "../../images/ironhack-logo-xs.png";
import menu from "../../images/menu-top-xs.png";

function Navbar() {
  return (
    <header>
      <div className="Navbar">
        <img src={ironhackLogo} alt="Ironhack logo" class="imgLogo" />
        <img src={menu} alt="Menu" class="imgMenu" />
      </div>
    </header>
  );
}

export default Navbar;
