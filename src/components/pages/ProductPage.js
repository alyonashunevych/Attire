import React from 'react';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    // Інші стани, якщо потрібно
  }

  render() {
    const { product } = this.props;

    if (!product) {
      return <div className='content'>Товар не знайдено</div>;
    }

    return (
      <div className='content'>
        <h1>{product.product_name}</h1>
        <p>Ціна: {product.price}</p>
        {/* Додайте інші поля товару, які вам потрібні */}
      </div>
    );
  }
}

export default ProductPage;
