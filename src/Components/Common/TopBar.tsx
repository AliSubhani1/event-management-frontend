import { FaCrown } from "react-icons/fa";

const TopBar = () => {
    return (
      <div className="bg-blue-0 px-4 py-2 fixed top-0 left-0 z-50 w-full text-base">
        <div className="w-full flex gap-2 items-center justify-center">
        <FaCrown className="text-yellow-0 size-5"/>
        <p>Get access to your favourite events</p>
        </div>
      </div>
    );
  };
  
export default TopBar;
  