import { useNavigate } from "react-router-dom";
import { navbarItems } from "../../../Utils/constants";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { SlMenu } from "react-icons/sl";

const MobileNavbar = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();
    return (
        <>
        {
            isMenuOpen ? (
                <div className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"} h-screen w-[70%] bg-gray-0 transform transition-transform duration-500 ease-in-out`}>
                <div className="w-full flex justify-end items-end">
                    <RxCross2 className="size-10 mr-4 mt-4 text-white-0" onClick={() => {setIsMenuOpen(false)}}/>
                </div>
    
                <div className="flex flex-col gap-12">
                        {navbarItems.map((item) => {
                            return (
                                <a 
                                    key={item.title} 
                                    href={item.path} 
                                    className={`mr-4 ml-8 text-left text-white-0 hover:opacity-80 ${window.location.pathname === item.path? 'font-bold underline underline-offset-[12px]' : ''}`}
                                    onClick={() => navigate(item.path)}
                                >
                                    {item.title}
                                </a>
                            )
                        })}
                </div>
            </div>
            ) : (
                
                <SlMenu  className="absolute top-0 mt-1 sm:mt-4 ml-4 size-8 text-white-0 z-10" onClick={() => {setIsMenuOpen(true)}}/>
            
            )
        }

        </>

    )
}

export default MobileNavbar;