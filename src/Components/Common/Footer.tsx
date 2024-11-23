import { FaCrown } from 'react-icons/fa';

const Footer = () => {
return (
    <div className="bg-gray-2 py-4 w-full flex gap-2 items-center justify-center">
        <FaCrown className="text-yellow-0 size-5"/>
        <p className='text-white-0 text-center'>All rights reserved</p>
    </div>
)
}

export default Footer;