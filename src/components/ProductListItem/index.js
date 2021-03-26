import React from 'react';

export default function ProductListItem({product}) {
  return (
    <div className="card" key={product._id}>
      <a href={`/product/${product._id}`} title={product.name}><img className="medium" src={product.image} alt={product.name} /></a>
      <div className="card-body">
        <a href={`/product/${product._id}`} title={product.name}>
          <h2>{product.name}</h2>
        </a>
        <div className="rating">
          <span>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>
        <div className="price">{product.price}</div> 
      </div>
    </div>
  )
}
