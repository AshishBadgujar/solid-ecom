import { createContext, useContext, JSX } from 'solid-js';
import { createStore } from 'solid-js/store';

// Define the type for a cart item
type Rating = {
  rate: number;
  count: number;
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  quantity?: number;
};

// Create a context with the default value as undefined
export const CartContext = createContext<any>();

export function CartProvider(props: { children: JSX.Element }) {
  // Use `createStore` to manage the cart items
  const [items, setItems] = createStore<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}

// Hook to use the cart context
export function useCartContext() {
  const context = useContext(CartContext);

  // If the context is undefined, throw an error
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
}
