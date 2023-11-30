import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { db, storage } from './firebase'; // Import your firebase configuration

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.getItems();
  }

  async getItems() {
    const items = [];
    const querySnapshot = await db.collection("ItemsDB").get();
    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      const imageUrl = await storage.refFromURL(data.img).getDownloadURL();
      items.push({ ...data, img: imageUrl });
    }
    this.setState({ items });
  }

  render() {
    return (
      <main className='items'>
        {this.state.items.map(el => (
          <NavLink key={el.id} to={`/products/${el.id}`} className='item'>
            <img alt='Product' src={el.img} className='item_img' />
            <div className="itembox">
              <div>
                <p className='item_title'>{el.product_name}</p>
                <p className='item_price'>{el.price}</p>
              </div>
              <button className='item_liked'></button>
            </div>
          </NavLink>
        ))}
      </main>
    );
  }
}

export default Item;
