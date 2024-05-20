
import { useSelector } from 'react-redux';
import LogoImage from '../assets/logo.jpg';
import Menu from './Menu';
import Offcanvas from './Offcanvas';
import UserIcon from './icons/UserIcon';
import { RootState } from '../store';

type MenuItem = {
    id: string;
    title: string;
    link: string;
    auth:boolean
  };
const MENU_DATA:MenuItem[] = [
    {
        id: "1",
        title: 'Home',
        link: '/',
        auth: true,
    },
    {
        id:"2",
        title: 'Brands',
        link: '/brands',
        auth:true,
    }
]

const Header = () => {
    const username = useSelector((state:RootState) => state.auth.username);

    return <>
               <header className="bg-white  shadow-sm">
                <div className="container mx-auto px-4">
                <nav className="mx-auto flex items-center justify-between w-full">
                    <div className="flex-1">
                        <a href="/"><img src={LogoImage} alt="Logo" /></a>
                    </div>
                    <div className="flex-1 justify-end lg:justify-center ">
                        <div className="flex justify-end">
                                <Menu menus={MENU_DATA}/>
                                <Offcanvas menus={MENU_DATA}/>
                        </div>
                    </div>
                    <div className="flex lg:flex-1 lg:justify-end">
                        <div className="hidden lg:inline-block text-primary">
                            <div className="flex">
                            <div className="pr-2">{username} </div>
                            <div><UserIcon/></div>
                            </div>
                             
                        </div>
                    </div>

                </nav>
                </div>
            </header>
    </>
}

export default Header;