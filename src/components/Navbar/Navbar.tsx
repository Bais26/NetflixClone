import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../../public/Netflix.png';

interface NavItem {
    name: string;
    url: string;
}

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const navItems: NavItem[] = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Service",
            url: "/service",
        },
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Blogs",
            url: "/blogs",
        },
        {
            name: "Contacts",
            url: "/contacts",
        },
    ];

    const handleToggleSidebar = () => {
        setToggle(!toggle);
    };

    return (
        <div className="container bg-transparent text-third sticky top-0 z-20">
            <div className="flex flex-wrap md:flex-nowrap justify-between p-4 items-center ">
                <a href="/" className=""><img src={Logo} alt="Logo" /></a>
                <div className="hidden md:flex items-center gap-12 text-xl">
                    {navItems.map((item, index) => (
                        <Link key={index} to={item.url}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden">
                    <button onClick={handleToggleSidebar}>
                        <i className="text-2xl mt-2 fa-solid fa-bars"></i>
                    </button>
                    {/* Sidebar for mobile */}
                    {toggle && (
                        <div className="absolute w-full top-12 left-0 p-4 shadow-lg z-20">
                            {navItems.map((item, index) => (
                                <div className="my-2" key={index}>
                                    <Link to={item.url} onClick={() => setToggle(false)}>
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {/* Icons on desktop */}
                <div className="text-xl hidden md:block">
                    <i className="mx-3 fa-solid fa-magnifying-glass"></i>
                    <i className="mx-3 fa-regular fa-bell"></i>
                    <i className="mx-3 fa-regular fa-user"></i>
                </div>
            </div>
        </div>
    );
}
