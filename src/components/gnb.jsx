import { Link } from "react-router-dom";
import logo from "../image/BlackLOGO.png";

export default function Gnb() {
  // const [navbar, setNavbar] = useState(false);


  return (
    <nav className="navBar area">

      <div className="navBar_logo">
        <Link to="/" className="pr-2.5 flex items-center">
          <img src={logo} alt="logo" />
          <span className="text-lg font-bold pl-2.5">영 선 산 업</span>
        </Link>
      </div>

      <ul className="navBar_menus flex-1 sm:flex-initial">
        <li className="navBar_menu_menu">
          <Link to="/design">
            디자인
          </Link>
        </li>
        <li>
          <Link to="/map" className="navBar_menu_menu">
            오시는 길
          </Link>
        </li>
        <li>
          <Link to="/equipment" className="navBar_menu_menu">
            포트폴리오
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navBar_menu_menu">
            견적 문의
          </Link>
        </li>
      </ul>

      <button id="menu-btn" class="block hamberger md:hidden focus:outline-none">
        <span class="hamberger-top"></span>
        <span class="hamberger-middle"></span>
        <span class="hamberger-bottom"></span>
      </button>

    </nav>
  );
}
