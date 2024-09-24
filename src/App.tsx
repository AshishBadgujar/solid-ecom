import type { Component } from 'solid-js';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Details from './components/Details';
import Cart from './components/Cart';
import Home from './components/Home';
import { Router } from '@solidjs/router';
import About from './components/About';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/product/:id',
    component: Details,
  },
  {
    path: '/about',
    component: About,
  },
];

const App: Component = () => {
  return (
    <>
      <Header />
      <Hero />
      <Router>{routes}</Router>
    </>
  );
};

export default App;
