import { useParams } from '@solidjs/router';
import { Component, createResource, Show } from 'solid-js';
import { useCartContext } from '../context/CartContext';

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

const fetchProduct = async (id: string) => {
  const res = await fetch('http://localhost:4000/products/' + id);
  return res.json();
};

const Details: Component = () => {
  const params = useParams();
  const [product] = createResource(params.id, fetchProduct);

  const { items, setItems } = useCartContext();

  const addProduct = () => {
    const exists = items.find((p: any) => p.id == product().id);
    if (exists) {
      setItems(
        (p: any) => p.id == product().id,
        'quantity',
        (q: any) => q + 1,
      );
    } else {
      setItems([...items, { ...product(), quantity: 1 }]);
    }
  };
  return (
    <Show when={product()} fallback={<p>Loading...</p>}>
      <section class="product-detail-section section-p1">
        <div class="pro-collection">
          <div class="product-cart">
            <img src={product().image} alt="product image" />
          </div>
          <div class="cart-details">
            <span>{product().category}</span>
            <h4>{product().title}</h4>
            <p>{product().description}</p>
            <h4 class="price">${product().price}</h4>
            {/* <span>Ratings</span> */}
            <button class="normal" onclick={addProduct}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </Show>
  );
};
export default Details;
