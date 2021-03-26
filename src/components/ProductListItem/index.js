import React from 'react';

export default function ProductListItem() {
  return (
    <>
      <a href="product.html">
        <img class="medium" src="images/p1.jpg" alt="product" />
      </a>
      <div class="card-body">
        <a href="product.html">
          <h2>Nike Slim Shirt</h2>
        </a>
        <div class="rating">
          <span>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
        </div>
        <div class="price">
          $100
        </div> 
      </div>
    </>
  )
}
