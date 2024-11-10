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
                <div className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"} h-screen fixed left-0 w-[70%] bg-gray-0 transform transition-transform duration-500 ease-in-out`}>
                <div className="w-full flex justify-end items-end">
                    <RxCross2 className="size-[120px] pt-20 text-white" onClick={() => {setIsMenuOpen(false)}}/>
                </div>
    
                <div className="flex flex-col gap-12">
                        {navbarItems.map((item) => {
                            return (
                                <a 
                                    key={item.title} 
                                    href={item.path} 
                                    className={`mr-4 ml-8 text-left text-white hover:opacity-80 ${window.location.pathname === item.path? 'font-bold underline underline-offset-[12px]' : ''}`}
                                    onClick={() => navigate(item.path)}
                                >
                                    {item.title}
                                </a>
                            )
                        })}
                </div>
            </div>
            ) : (
                
                <SlMenu className="size-[120px] pt-20 text-blue-0 fixed left-0 top-0" onClick={() => {setIsMenuOpen(true)}}/>
            
            )
        }

        </>

    )
}

export default MobileNavbar;