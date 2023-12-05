import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db, storage } from '../firebase.js';
import { NavLink } from 'react-router-dom';
import { Popup } from '../Pop-up.js';
import popup from '../../img/pop-up size.png';
import Sizes from '../Sizes.js';
import { TheSame } from '../TheSame.js';
//import Bag from '../Bag.js';

function ProductPage() {
  const { id, color } = useParams();
  const [product, setProduct] = useState(null);
  const [additionalImageUrls, setAdditionalImageUrls] = useState([]);
  const [collectionName, setCollectionName] = useState(null);  // Додайте стан для зберігання collectionName

  useEffect(() => {
    const getProductData = async () => {
      const docRef = await db.collection('ItemsDB').doc(id).get();
      if (docRef.exists) {
        const data = docRef.data();
        const imageUrl = await storage.refFromURL(data.img).getDownloadURL();
        setProduct({ ...data, img: imageUrl });
        setCollectionName(data.collection_name);  // Зберегти collectionName в стані
        const additionalUrls = await Promise.all(
          data.additional_img.map(async (img) => {
            return await storage.refFromURL(img).getDownloadURL();
          })
        );
        setAdditionalImageUrls(additionalUrls);
      } else {
        console.log('No such document!');
      }
    };

    getProductData();

    window.scrollTo(0, 0);
  }, [id]);

  function formatCurrency(input) {
    const amount = parseFloat(input);
    if (!isNaN(amount)) {
      const formattedAmount = amount.toLocaleString('en-US', {
        minimumFractionDigits: 1,
      });
      return `US$ ${formattedAmount}`;
    } else {
      return input;
    }
  }

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  // Додайте умову, перевіряючи collectionName перед передачею до компоненту TheSame
  return (
    <div className='content'>
      {product && (
        <div className='prod'>
          <div class="add_imgs">
            {additionalImageUrls.map((url, index) => (
              <img key={index} alt='Additional Product' className='prodimg' src={url} />
            ))}
          </div>
          <div className='info'>
            <NavLink to="/w&k" className='prod_coll'>{product.collection_name}</NavLink>
            <div className='p_box'>
              <p className='prod_name'>{product.product_name}</p>
              <p className='prod_price'>{formatCurrency(product.price)}</p>
            </div>
            <p className='prod_art'>art.{product.article}</p>
            <div className='colorsbox'>
              <div className='colors'>
                <NavLink to={`/products/${id}/${color[0]}`}><div className='beige'></div></NavLink>
                <NavLink to={`/products/${id}/${color[1]}`}><div className='black'></div></NavLink>
                <NavLink to={`/products/${id}/${color[2]}`}><div className='white'></div></NavLink>
              </div>
              <p className='prod_color'>{product.color[0]}</p>
            </div>
            <button className='pop-up_butt_show' onClick={() => setModalInfoOpen(true)}>
              Size guide
            </button>
            <Popup isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)}>
              <img src={popup} alt='popup' className='img_popup' />
            </Popup>
            <Sizes sizes={product.sizes} />
            <div className='butt_box'>
              <button className='add_to_bag'>Add to shopping bag</button>
              <button className='add_to_fav'></button>
            </div>
            <div className='prod_link_box'>
              <NavLink to="/delivery" className='delivery'>Delivery</NavLink>
              <NavLink to="/returns" className='delivery'>Returns</NavLink>
            </div>
          </div>
        </div>
      )}
      <div className='random-products2'>
        <p className='thesame_text'>in the same style</p>
        {/* Перевірте чи є collectionName перед викликом компоненту TheSame */}
        {collectionName && <TheSame collectionName={collectionName} currentProductId={id} />}
      </div>


      {/* Як завантажиться сторінка - розкоментуй -> */}       
      {/* <Bag product={product}/>   */}

    </div>
  );
}

export default ProductPage;
