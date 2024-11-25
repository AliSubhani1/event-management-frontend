import ImageTextBox from "../../Components/Common/ImageTextBox";
import DownloadIcon from '../../Assets/svg/DownloadIcon.svg';
import HelpIcon from '../../Assets/svg/HelpIcon.svg';
import ManageIcon from '../../Assets/svg/ManageIcon.svg';

const InformationSection = () => {
    return (
        <div className="w-full px-12 flex flex-col gap-8 sm:gap-0 sm:flex-row items-center sm:justify-between mt-20">
            <ImageTextBox icon={DownloadIcon} heading="Access all events" description="Find the best deals on our website"/>
            <ImageTextBox icon={HelpIcon} heading="Help center" description="Reach us out for any issues."/>
            <ImageTextBox icon={ManageIcon} heading="Manage Bookings" description="View and manage your bookings"/>
        </div>
    )
}

export default InformationSection;