import { useEffect, useState } from "react";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () =>{
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint
        };
    
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      return (
        <>
            {
                isMobile ? <MobileNavbar /> : <MainNavbar />  // Switch between MainNavbar and MobileNavbar based on screen size
            }
        </>
      )
}

export default Navbar;