type ImageTextBoxProps = {
    icon: string,
    heading: string, 
    description: string,
}

const ImageTextBox = ({icon, heading, description} : ImageTextBoxProps) => {
    return (
        <div>
            <img src={icon} alt="icon" />
            <div>
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ImageTextBox;