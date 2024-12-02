import WebsiteLogo from '../../../Assets/png/EventLogo.png'
import { useNavigate } from 'react-router-dom';
import { navbarItems } from '../../../Utils/constants';

const MainNavbar = () =>{

    const navigate = useNavigate();
    return (
        <div className='bg-white pb-2 shadow-sm flex  justify-between w-full items-center'>
            <img className='w-[200px]' src={WebsiteLogo} alt="website logo" />
            <div className='flex gap-8'>
                <div>
                    {navbarItems.map((item) => {
                        return (
                            <a 
                                key={item.title} 
                                href={item.path} 
                                className={`mr-4 hover:opacity-80 ${window.location.pathname === item.path? 'text-blue-0 underline underline-offset-[12px]' : 'text-gray-0'}`}
                                onClick={() => navigate(item.path)}
                            >
                                {item.title}
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default MainNavbar;