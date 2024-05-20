import { useState } from "react";
import BurgerIcon from "./icons/BurgerIcon";
import CloseIcon from "./icons/CloseIcon";
import classes from './Offcanvas.module.css';
import { NavLink } from "react-router-dom";

type MenuItem = {
    id: string,
    title: string,
    link:string
}
type MyProps = {
    menus: MenuItem[]
}

const Offcanvas = ({menus}:MyProps) => {
    const [open, setOpen] = useState(false);

    const handleToggleMenu = () => {
        setOpen( prevOpen => !prevOpen);
    }


    return <>
    <div className="offcanvas-wrapper flex">
    <div id="offcanvas-toggler" className="float-right block lg:hidden" onClick={handleToggleMenu}>
        <BurgerIcon/>
    </div>
        <div className={open ? `${classes.offcanvasmenu} ${classes.visible} transition-all` : `${classes.offcanvasmenu} transition-all hidden`}>
	        <div className="flex justify-end p-3 pt-4">
                <div className="close-offcanvas" onClick={handleToggleMenu}>
                        <CloseIcon/>
                </div>
	        </div>
            <div className="offcanvas-inner p-6">
                <ul className="flex flex-col">

                    {
                        menus.map( menu => 
                            <li key={menu.id} className={`block border-b border-white/20 `}>
                                <NavLink to={menu.link}  className={({ isActive }) => isActive ? `current ${classes.active} py-3 block` : "py-3 block"}>
                                    {menu.title}
                                </NavLink>
                            </li> 
                        )
                    }
 
                </ul>
                

            </div>
        </div>
        </div>
    </>
}

export default Offcanvas;