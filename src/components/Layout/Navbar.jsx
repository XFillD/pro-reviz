import revizLogo from "/logo-white.png";
import useTransparentHeader from "../../hooks/useTransparentHeader";
import { cn } from "../../lib/classnames";
import Hamburger from "../Icons/Hamburger";
import SideBar from "./SideBar";
import { useState } from "react";

const headerLinks = [
    { name: "Domů", href: "home" },
    { name: "Služby", href: "sluzby" },
    // { name: "O nás", href: "about" },
    { name: "Portfolio", href: "portf" },
    // { name: "Kontakt", href: "kontakt" },
];

const Navbar = () => {
    const isTransparent = useTransparentHeader();
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-colors duration-1000 ease-in-out",
                    isTransparent ? "bg-transparent" : "bg-mainRed bg-opacity-95"
                )}
            >
                <div className="flex justify-between items-center h-14 md:h-20 max-w-7xl mx-auto p-4">
                    <img src={revizLogo} alt="Reviz Logo" className="h-full" />
                    <ul className="hidden md:flex gap-10">
                        {headerLinks.map(({ name, href }) => (
                            <li key={name}>
                                <a href={`#${href}`} className="text-white hover:text-green-500 duration-500">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Hamburger className="md:hidden" onClick={() => setIsSideBarOpen(true)} />
                </div>
            </nav>
            <SideBar open={isSideBarOpen} setOpen={setIsSideBarOpen}>
                <div className="h-full flex flex-col justify-between">
                    <ul className="flex flex-col gap-5">
                        {headerLinks.map(({ name, href }) => (
                            <li key={name}>
                                <a
                                    href={`#${href}`}
                                    onClick={() => setIsSideBarOpen(false)}
                                    className="text-white hover:text-green-500 duration-500"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <img src={revizLogo} alt="Reviz Logo" className="w-full" />
                </div>
            </SideBar>
        </>
    );
};

export default Navbar;
