import { FC } from 'react'
import DiscoverIcon from '../../Assets/svg/DiscoverIcon.svg'
import LowestIcon from '../../Assets/svg/LowestIcon.svg'
import MoreIcon from '../../Assets/svg/MoreIcon.svg'

const WhyUseIt = () => {
    return(
        <div className="bg-gray-3 w-full p-12 text-white-0">
            <div>
                <h3 className='font-bold  text-2xl pb-2'>Why Use Event Booking?</h3>
                <p className='pb-8'>We provide the best event deals in Europe.</p>
            </div>
            <div className='flex gap-8 flex-col sm:flex-row items-center justify-center'>
                <IconSection Icon={MoreIcon} Heading="More for Less" Description="We offer e-tickets with exceptional discounted deals across the region" />
                <IconSection Icon={LowestIcon} Heading="Lowest Fares" Description="We provide affordable tickets to save up to 50%" />
                <IconSection Icon={DiscoverIcon} Heading="Discover" Description="We make your access to events easy across Europe by providing easy e-tickets" />            
            </div>
        </div>
    )
}

type IconSectionProps = {
    Icon: string,
    Heading: string,
    Description: string,
}

const IconSection:FC<IconSectionProps> = ({Icon, Heading, Description}) =>{
    return (
    <div className='flex gap-6 items-start'>
        <img src={Icon} alt="" />
        <div className='max-w-[330px]'>
            <h3 className='text-xl'>{Heading}</h3>
            <p>{Description}</p>
        </div>
    </div>
    )

}

export default WhyUseIt;