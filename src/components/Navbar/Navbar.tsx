import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../../public/Netflix.png'

interface NavItem {
    name: string;
    url: string;
}

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [showDropdown, setShowDropdown] = useState<Record<number, boolean>>({});
    const navItems = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Service",
            url: "/service"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Blogs",
            url: "/blogs",
        },
        {
            name: "Contacs",
            url: "/contacs"
        },

    ];

    const handleToggleSidebar = () => {
        setToggle(!toggle);
    };

    const handleToggleDropdown = (index: number) => {
        setShowDropdown(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="container bg-transparent text-third sticky top-0 z-20">
            <div className="flex flex-wrap md:flex-nowrap justify-between p-4 items-center ">
                    <a href="/" className=""><img src={Logo} alt="" /></a>
                <div className="hidden md:flex items-center gap-12 md:gap-12 text-xl ">
                    {navItems.map((items, index) => {
                        return (
                            <div className=" my-2" key={index}>
                                <Link className="" key={index} to={items.url}>{items.name}</Link>
                            </div>
                        );
                    })}
                </div>
                <div className="md:hidden ">
                    <button onClick={handleToggleSidebar}>
                        <i className=" text-2xl mt-2 fa-solid fa-bars "></i>
                    </button>
                    {toggle && (
                        <div className="absolute w-full top-12 right-0 p-4 ">
                            <div className="p-4 ">
                                {navItems.map((items, index) => {
                                    return (
                                        <div className=" my-2" key={index}>
                                            <span className=" " onClick={() => handleToggleDropdown(index)}>
                                                <a className="" key={index} href={items.url}>{items.name}</a>
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div className="text-xl hidden md:block">
                <i className="mx-3 fa-solid fa-magnifying-glass"></i>
                <i className="mx-3 fa-regular fa-bell"></i>
                <i className="mx-3 fa-regular fa-user"></i>
                </div>
            </div>
        </div>
    );
}