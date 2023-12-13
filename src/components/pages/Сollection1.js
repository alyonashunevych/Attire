import React from 'react'
import img1 from '../../img/col1img1.png';
import img2 from '../../img/col1img2.png';
import video1 from '../../video/col1video1.mp4';
import img3 from '../../img/pexels-cottonbro-studio-9892756 1.png';
import img4 from '../../img/pexels-cottonbro-studio-9896725.png';
import video2 from '../../video/col1video2.mp4';
import img5 from '../../img/pexels-cottonbro-studio-9892890 1.png';
import img6 from '../../img/pexels-cottonbro-studio-9896800.jpg';
import img8 from '../../img/pexels-cottonbro-studio-9906669.png';
import { Item } from '../Item';
import { Helmet } from 'react-helmet';

export default function Collection1() {
    return (
        <div className="content">
            <Helmet>
                <title>Attire - Warm & Knitted</title>
            </Helmet>

            <div className="col1_box2">
                <img src={img1} className='col1_img1' alt='clothes from the collection' />

                <div className="col1_box1">
                    <img src={img2} className='col1_img2' alt='clothes from the collection' />

                    <div className="col1_textbox">
                        <p className='txt1'>Summer/Fall '23</p>
                        <p className='title1'>Warm & Knitted</p>
                        <p className='txt2'>This collection is an exclusive line of clothing that combines coziness,
                            style, and practicality. This collection is designed for women who appreciate comfort and fashion
                            simultaneously and want to look great in any weather.</p>
                        <p className='txt2'>The cardigans in this collection feature a fashionable and contemporary design
                            that complements your style. You'll find a variety of cuts and colors to choose from to suit your preferences.</p>
                    </div>

                </div>
            </div>

            <video autoPlay muted loop src={video1} />

            <div className="col1_box2">
                <img src={img3} className='col1_img1' alt='clothes from the collection' />
                <img src={img4} className='col1_img1' alt='clothes from the collection' />
            </div>

            <div className="textline"></div>
            <video autoPlay muted loop src={video2} />
            <div className="textline2"></div>

            <div className="col1_box2">
                <img src={img5} className='col1_img1' alt='clothes from the collection' />
                <div className="imgbox">
                    <p className='txt3'>Our knit cardigans are made from high-quality materials that provide warmth and comfort even on
                        chilly days. The various knitting textures and patterns add a special charm and uniqueness to each model.</p>
                </div>
            </div>

            <img src={img6} style={{ width: '100%' }} alt='clothes from the collection' />

            <div className="col1_box2">
                <div className="imgbox2">
                    <p className='txt3'>Our knit cardigans are perfect for creating diverse outfits, whether it's for the office,
                        leisure, or evening outings. They pair well with jeans, skirts, as well as pants and shorts.</p>
                </div>
                <img src={img8} className='col1_img1' alt='clothes from the collection' />
            </div>

            <div className='items_box'><Item /></div>
        </div>
    )
}
