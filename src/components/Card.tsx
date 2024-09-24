import { A } from '@solidjs/router';
import { Component } from 'solid-js';

type Rating = {
  rate: number;
  count: number;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

const Card: Component<{ product: Product }> = ({ product }) => {
  return (
    <div class="product-cart">
      <img src={product.image} alt="product image" />
      <span>{product.category}</span>
      <h4>
        <A href={'/product/' + product.id}>{product.title}</A>
      </h4>
      <h4 class="price">${product.price}</h4>
    </div>
  );
};
export default Card;
