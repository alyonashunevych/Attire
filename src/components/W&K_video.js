import React from 'react'
import video1 from 'D:/3 курс/1 семестр/Техн. розроб. та прос. сайтів/attire/src/video/W&_video.mp4';

export default function WK_Video() {
    // const history = useHistory();

    // const redirectToPage = () => {
    //     // Здійснення переходу на іншу сторінку
    //     history.push('/ім'я_іншої_сторінки');
    // };

    return (
        <div className='vid_cont'>
            <video autoPlay muted loop  src={video1} />
            <div class="cont_main">
                <p className='text_on_main'>new colection</p>
                <p className='title_on_main'>Warm & Knitted</p>
                <button className='discover_more'>Discover more</button>
            </div>
        </div>
    )
}
