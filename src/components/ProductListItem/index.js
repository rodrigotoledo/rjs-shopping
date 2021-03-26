import Rating from '../Rating';

export default function ProductListItem(props) {
  const { product } = props;
  return (
    <div className="card" key={product._id}>
      <a href={`/product/${product._id}`} title={product.name}><img className="medium" src={product.image} alt={product.name} /></a>
      <div className="card-body">
        <a href={`/product/${product._id}`} title={product.name}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">{product.price}</div> 
      </div>
    </div>
  )
}
