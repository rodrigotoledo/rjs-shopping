import React from 'react'
import ProductListItem from './components/ProductListItem'

function App() {
  return (
    <div class="grid-container">
      <header class="row">
        <div><a class="brand" href="index.html">amazona</a></div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div class="row center">
          <div class="card">
            <ProductListItem />
          </div>
        </div>
      </main>
      <footer class="row center">All right reserved</footer>
    </div>
  );
}

export default App;
