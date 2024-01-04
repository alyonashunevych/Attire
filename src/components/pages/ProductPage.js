import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db, storage } from '../firebase.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { Popup } from '../Pop-up.js';
import popup from '../../img/pop-up size.png';
import Sizes from '../Sizes.js';
import { TheSame } from '../TheSame.js';
//import Bag from '../Bag.js'; // Import the Bag component
import { v4 as uuidv4 } from 'uuid';
import { useCookies } from 'react-cookie';
import Bag from '../Bag.js';

function ProductPage() {

  const generateSessionID = () => {
    return uuidv4();
  };

  const setSessionIDInCookie = (cookies, sessionID) => {
    setCookie('sessionID', sessionID, { path: '/' });
  };

  const { id, color } = useParams();
  const [product, setProduct] = useState(null);
  const [additionalImageUrls, setAdditionalImageUrls] = useState([]);
  const [collectionName, setCollectionName] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  //const [shoppingBag, setShoppingBag] = useState([]);
  const [cookies, setCookie] = useCookies(['sessionID']);
  // eslint-disable-next-line
  const [sessionID, setSessionID] = useState(cookies.sessionID || generateSessionID());
  const navigate = useNavigate();
  const [showBagOverlay, setShowBagOverlay] = useState(false);




  useEffect(() => {
    const getProductData = async () => {
      const docRef = await db.collection('ItemsDB').doc(id).get();
      if (docRef.exists) {
        const data = docRef.data();
        const imageUrl = await storage.refFromURL(data.img).getDownloadURL();
        setProduct({ ...data, img: imageUrl });
        setCollectionName(data.collection_name);
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

    // Set the selected color from the URL parameter
    setSelectedColor(color);

    window.scrollTo(0, 0);
  }, [id, color]);

  // Function to add the current product to the shopping bag
  const handleAddToBagClick = () => {
    if (product && selectedSize) {
      const newItem = {
        id: product.id,
        name: product.product_name,
        color: selectedColor,
        size: selectedSize,
        price: product.price,
        img: product.img,
        quantity: 1,
      };

      // Check if the sessionID cookie is set, if not, set it
      if (!cookies.sessionID) {
        setSessionIDInCookie(setCookie, sessionID);
      }

      // Get the current shopping bag items from Firestore, if any
      db.collection('ShoppingBag')
        .doc(sessionID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            // If the document exists, get the existing items and add the new item
            const existingItems = doc.data().items || [];
            const updatedItems = [...existingItems, newItem];

            db.collection('ShoppingBag')
              .doc(sessionID)
              .set({ items: updatedItems })
              .then(() => {
                console.log('Item added to shopping bag in Firestore');
              });
          } else {
            // If the document does not exist, create a new one with the new item
            db.collection('ShoppingBag')
              .doc(sessionID)
              .set({ items: [newItem] })
              .then(() => {
                console.log('New shopping bag created in Firestore');
              });
          }
        })
        .catch((error) => {
          console.error('Error accessing shopping bag:', error);
        });
      setShowBagOverlay(true);
    }
  };

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

  const closeBagOverlay = () => {
    setShowBagOverlay(false);
  };

  return (
    <div className='content'>
      {product && (
        <div className='prod'>
          <div className="add_imgs">
            {additionalImageUrls.map((url, index) => (
              <img key={index} alt='Additional Product' className='prodimg' src={url} />
            ))}
          </div>
          <div className='info'>
            <NavLink to="/w&k" className='prod_coll'>{product.collection_name}</NavLink>
            <div className='p_box'>
              <h1 className='prod_name'>{product.product_name}</h1>
              <p className='prod_price'>{formatCurrency(product.price)}</p>
            </div>
            <p className='prod_art'>art.{product.article}</p>
            <div className='colorsbox'>
              <div className='colors'>
                {product.color.map((colorValue, index) => (
                  <NavLink
                    key={index}
                    to={`/products/${id}/${colorValue}`}
                    className={selectedColor === colorValue.toLowerCase() ? 'selected-color' : ''}
                  >
                    <div className={colorValue.toLowerCase()}></div>
                  </NavLink>
                ))}
              </div>
              <p className='prod_color'>{selectedColor}</p>
            </div>
            <button className='pop-up_butt_show' onClick={() => setModalInfoOpen(true)}>
              Size guide
            </button>
            <Popup isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)}>
              <img src={popup} alt='popup' className='img_popup' />
            </Popup>
            <Sizes sizes={product.sizes} setSelectedSize={setSelectedSize} selectedSize={selectedSize} />
            <div className='butt_box'>
              <button className='add_to_bag' onClick={handleAddToBagClick}>Add to shopping bag</button>
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
        {collectionName && <TheSame collectionName={collectionName} currentProductId={id} />}
      </div>
      {/* Pass shopping bag state and function to the Bag component */}
      {/* product && <Bag product={product} shoppingBag={shoppingBag} setShoppingBag={setShoppingBag} /> */}
      {showBagOverlay && (
        <Bag onClose={closeBagOverlay} />
      )}
    </div>
  );
}
export default ProductPage;
