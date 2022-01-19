import './styles.css';
import { useState } from "react";

// import like and dislike symbols
import { IconContext } from "react-icons";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsShare } from "react-icons/bs";

// import copy to clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Post = (props) => {

    const { img_src, date, camera, rover, setCopied } = props;

    // handles liking and unliking posts
    const [like, setLike] = useState(false);

    const likePost = () => {
        setLike(true);
    }

    const dislikePost = () => {
        setLike(false)
    }

    return (
        <div className='post'>
            <div className='postImage'>
                {
                    <img src={img_src} alt={"picture from" + camera} />
                }
            </div>
            <div className='postLike'>
                {
                    like === false && 
                        <IconContext.Provider value={{ className: "loveIcon" }}>
                            <AiOutlineHeart size="1.8em" onClick={likePost}/>
                        </IconContext.Provider>
                }
                {
                    like === true && 
                        <IconContext.Provider value={{ className: "loveIcon" }}>
                            <AiFillHeart size="1.8em" onClick={dislikePost}/>
                        </IconContext.Provider>
                }

                <CopyToClipboard
                  options={{ debug: props.debug, message: "" }}
                  text={img_src}
                  onCopy={() => setCopied(true)}
                >
                    <div>
                        <IconContext.Provider value={{ className: "shareIcon" }}>
                            <BsShare size="1.4em" />
                        </IconContext.Provider>
                    </div>
                </ CopyToClipboard>
            </div>
            <div className='postDesc'>
                <h1><strong>{rover}</strong> rover</h1>
                <p><strong>Date</strong> {date}</p>
                <p><strong>Camera</strong> {camera}</p>
            </div>
        </div>
    )
}