import SearchEvents from "./SearchEvents";
import EventPartners from "./EventPartners";
import WhyUseIt from "../../Components/Common/WhyUseIt";
import InformationSection from "./InformationSection";
import FAQSection from "../../Components/Common/Faqs";

const Home = () =>{
    return (
        <div>
            <SearchEvents />
            <WhyUseIt />
            <InformationSection />
            <EventPartners />
            <FAQSection />
        </div>
    )
}

export default Home;