import { Component, For } from 'solid-js';
import { useCartContext } from '../context/CartContext';

const Cart: Component = () => {
  const { items } = useCartContext();

  const total = () => {
    return items.reduce((acc: any, p: any) => {
      return acc + p.quantity * p.price;
    }, 0);
  };
  return (
    <section class="product-section section-p1">
      <div class="container">
        <For each={items}>
          {(product) => (
            <div class="card card-70">
              <div class="product-cart">
                <img src={product.image} alt="product image" />
                <div class="details">
                  <span>{product.category}</span>
                  <h4>{product.title}</h4>
                  <h4 class="price">${product.price}</h4>
                  <span>
                    <strong>Quantity: </strong>
                    {product.quantity}
                  </span>
                </div>
              </div>
            </div>
          )}
        </For>
        <div class="card card-30">
          <h2>Summary</h2>
          <br />
          <div class="flex-price">
            <span>Subtotal</span>
            <span>${total()}</span>
          </div>
          <div class="flex-price">
            <span>Estimated Shipping & Handling</span>
            <span>$8</span>
          </div>
          <div class="flex-price">
            <span>Estimated Tax</span>
            <span>-</span>
          </div>
          <hr />
          <div class="flex-price">
            <h4>Total</h4>
            <h4>${total() + 8}</h4>
          </div>
          <hr />
          <br />
          <button class="checkout-button">Checkout</button>
        </div>
      </div>
    </section>
  );
};
export default Cart;
