import { Component } from 'solid-js';
import { useCartContext } from '../context/CartContext';

const Header: Component = () => {
  const { items } = useCartContext();
  const quantity = () => {
    return items.reduce((acc: any, current: any) => {
      return acc + current.quantity;
    }, 0);
  };
  return (
    <header>
      <div id="header">
        <div class="header-logo">
          <h3>Solid.js</h3>
        </div>
        <div class="header-list">
          <nav class="header-list-nav">
            <ul>
              <li>
                <a class="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/cart">Cart ({quantity()})</a>
              </li>
              <li>
                <a href="/about">about</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
