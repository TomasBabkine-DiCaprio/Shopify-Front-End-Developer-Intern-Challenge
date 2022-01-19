import './styles.css';

// import like and dislike symbols
import { IconContext } from "react-icons";
import { BsShare } from "react-icons/bs";

export const CopiedIndicator = (props) => {

    return (
        <div className='copiedIndicator'>
            <IconContext.Provider value={{ className: "shareIcon" }}>
                <BsShare size="1.4em" />
            </IconContext.Provider>
            <p>Copied to clipboard!</p>
        </div>
    )
}