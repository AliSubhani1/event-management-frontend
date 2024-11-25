type ImageTextBoxProps = {
    icon: string;
    heading: string;
    description: string;
};

const ImageTextBox = ({ icon, heading, description }: ImageTextBoxProps) => {
    return (
        <div
            className="border-gray-0 border-opacity-40 border rounded-md flex p-4 gap-4 justify-center w-[360px] cursor-pointer 
                       hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
            <img src={icon} alt="icon" />
            <div>
                <h3 className="text-xl">{heading}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ImageTextBox;
