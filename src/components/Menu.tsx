
import { NavLink } from "react-router-dom";


type MenuItem = {
    id: string,
    title: string,
    link:string,
    auth?:boolean,
}
type MyProps = {
    menus: MenuItem[]
}
const Menu = ({menus}:MyProps) => {
    
     return <>
     <ul className="menus float-right hidden lg:block">
     {menus.map((menu) => (
        <li key={menu.id} className="inline-block">
          <NavLink
            to={menu.link}
            className={({ isActive }) =>
              isActive ? "px-6 text-primary" : "px-6"
            }
          >
            {menu.title}
          </NavLink>
        </li>
      ))}
     </ul>
     </>
}

export default Menu;