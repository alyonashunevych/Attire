import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { db, storage } from './firebase.js';

export const TheSame = ({ currentProductId, collectionName }) => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        const getRandomProducts = async () => {
            try {
                console.log("Current Product ID:", currentProductId);
                console.log("Collection Name:", collectionName);

                const querySnapshot = await db.collection("ItemsDB")
                    .where('collection_name', '==', collectionName)
                    .where(firebase.firestore.FieldPath.documentId(), '!=', currentProductId || '')
                    .limit(3)
                    .get();

                console.log("Query Snapshot:", querySnapshot);

                // Перевірка наявності даних
                if (querySnapshot.empty) {
                    console.log("No matching documents.");
                    return;
                }

                const randomProductsData = [];
                for (const doc of querySnapshot.docs) {
                    const data = doc.data();
                    const imageUrl = await storage.refFromURL(data.img).getDownloadURL();
                    randomProductsData.push({ ...data, img: imageUrl });
                }

                console.log("Random Products Data:", randomProductsData);
                setRandomProducts(randomProductsData);
            } catch (error) {
                console.error("Error fetching random products:", error);
            }
        };

        getRandomProducts();
    }, [currentProductId, collectionName]);

    return (
        <div className='random-products'>
            {randomProducts.map((randomProduct) => (
                <NavLink key={randomProduct.id}
                    to={`/products/${randomProduct.id}/${randomProduct.color[0]}`}
                    className='thesame_item'
                >
                    <img alt='Random Product' src={randomProduct.img} className='thesame_item_img' />
                    <div className='itembox'>
                        <div>
                            <p className='item_title'>{randomProduct.product_name}</p>
                            <p className='item_price'>{randomProduct.price}</p>
                        </div>
                        <button className='item_liked'></button>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};
