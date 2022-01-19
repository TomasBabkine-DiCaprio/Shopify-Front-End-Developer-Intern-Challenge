import './styles.css';

export const Post = (props) => {

    const { img_src, date, camera, rover } = props;

    return (
        <div className='post'>
            <div className='postImage'>
                {
                    <img src={img_src} alt={camera} />
                }
            </div>
            <div className='postDesc'>
                <h1><strong>{rover}</strong> rover</h1>
                <p><strong>Date</strong> {date}</p>
            </div>
        </div>
    )
}