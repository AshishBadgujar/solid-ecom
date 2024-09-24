import { Component, createResource, For, Show } from 'solid-js';
import Card from './Card';

const fetchProducts = async () => {
  const res = await fetch('http://localhost:4000/products');
  return res.json();
};
const Home: Component = () => {
  const [products] = createResource(fetchProducts);
  return (
    <Show when={products()} fallback={<p>loading...</p>}>
      <section class="product-section section-p1">
        <div class="pro-collection">
          <For each={products()}>{(product) => <Card product={product} />}</For>
        </div>
      </section>
    </Show>
  );
};
export default Home;
