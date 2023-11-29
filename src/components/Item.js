import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          collection_name: 'Warm & Knitted',
          product_name: 'Knitted jersey with ruffles on the sleeves',
          price: '15 $',
          article: '58647923',
          color: 'Beige',
          sizes: ['S', 'M', 'L', 'XL'],
          img: 'w&k_item_1.png',
          additional_img: ['', '']
        },
        {
          id: 2,
          collection_name: 'Warm & Knitted',
          product_name: 'Sandals with a knitted upper',
          price: '20 $',
          article: '75982496',
          color: 'Beige',
          sizes: ['35', '36', '37', '38', '39'],
          img: 'w&k_item_2.png',
          additional_img: ['', '']
        },
        {
          id: 3,
          collection_name: 'Warm & Knitted',
          product_name: 'Knitted loose-fitting sweater with a crew neck',
          price: '18 $',
          article: '37915826',
          color: 'Milk',
          sizes: ['S', 'M', 'L', 'XL'],
          img: 'w&k_item_3.png',
          additional_img: ['', '']
        },
        {
          id: 4,
          collection_name: 'Warm & Knitted',
          product_name: 'Leather midi skirt with slit',
          price: '22 $',
          article: '84569123',
          color: 'Beige',
          sizes: ['S', 'M', 'L', 'XL'],
          img: 'w&k_item_4.png',
          additional_img: ['', '']
        },
        {
          id: 5,
          collection_name: 'Warm & Knitted',
          product_name: 'Linen midi dress with straps',
          price: '18 $',
          article: '24865792',
          color: 'Beige',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          img: 'w&k_item_5.png',
          additional_img: ['add_img1_1.png', 'add_img1_2.png']
        },
        {
          id: 6,
          collection_name: 'Warm & Knitted',
          product_name: 'Linen midi skirt',
          price: '24 $',
          article: '48652791',
          color: 'White',
          sizes: ['XS', 'S', 'L'],
          img: 'w&k_item_6.png',
          additional_img: ['', '']
        }
      ],
    };
  }

  render() {
    return (
      <main className='items'>
        {this.state.items.map(el => (
          <NavLink key={el.id} to={`/products/${el.id}`} className='item'>
            <img alt='Product' src={'./img/' + el.img} className='item_img' />
            <div className="itembox">
              <div><p className='item_title'>{el.product_name}</p>
              <p className='item_price'>{el.price}</p></div>
              <button className='item_liked'></button>
            </div>
          </NavLink>
        ))}
      </main>
    )
  }
}

export default Item
