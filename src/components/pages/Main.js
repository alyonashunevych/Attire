import React from 'react'
import CCC from "../CCC";
import RPD from "../RPD";
import WKVideo from "../W&K_video";


export default function Main() {
    window.scrollTo(0, 0);
    return (
        <div className='content'>
            <WKVideo />
            <div className="box">
                <RPD />
                <CCC />
            </div>
        </div>
    )
}
