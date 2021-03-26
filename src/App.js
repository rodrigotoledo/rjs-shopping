import React from 'react';
import data from './data';
import ProductListItem from './components/ProductListItem';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div><a className="brand" href="/">amazona</a></div>
        <div>
          <a href="/cart" title="Cart">Cart</a>
          <a href="/signin" title="Sign In">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => <ProductListItem product={product} />)}
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
