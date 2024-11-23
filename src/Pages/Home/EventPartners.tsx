import Logo1 from '../../Assets/svg/LogoSlider/Logo1.svg';
import Logo2 from '../../Assets/svg/LogoSlider/Logo2.svg';
import Logo3 from '../../Assets/svg/LogoSlider/Logo3.svg';
import Logo4 from '../../Assets/svg/LogoSlider/Logo4.svg';
import Logo5 from '../../Assets/svg/LogoSlider/Logo5.svg';
import Logo6 from '../../Assets/svg/LogoSlider/Logo6.svg';
import Logo7 from '../../Assets/svg/LogoSlider/Logo7.svg';
import Logo8 from '../../Assets/svg/LogoSlider/Logo8.svg';
import Logo9 from '../../Assets/svg/LogoSlider/Logo9.svg';
import Logo10 from '../../Assets/svg/LogoSlider/Logo10.svg';
import Marquee from "react-fast-marquee";

const EventPartners = () => {
    return (
        <div className='w-[90%] mx-auto mt-20'>
            <h3 className='font-bold text-xl mb-4'>Top Event Partners</h3>
            <p className='text-md'>Get access to events by best organizers in Europe.</p>
            <Marquee className='my-12'>
                <img src={Logo1} alt="logo" />
                <img src={Logo2} alt="logo" />
                <img src={Logo3} alt="logo" />
                <img src={Logo4} alt="logo" />
                <img src={Logo5} alt="logo" />
                <img src={Logo6} alt="logo" />
                <img src={Logo7} alt="logo" />
                <img src={Logo8} alt="logo" />
                <img src={Logo9} alt="logo" />
                <img src={Logo10} alt="logo" />
            </Marquee>
        </div>
    )
}

export default EventPartners;