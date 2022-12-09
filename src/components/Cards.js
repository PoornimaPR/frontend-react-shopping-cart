import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../App";

const Cards = (props) => {
  const { product } = props;
  const [selected, setSelected] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { cartProducts } = useContext(CartContext);

  useEffect(() => {
    if (cartProducts) {
      cartProducts.map((products) => {
        if (product.id === products.id) {
          setSelected(products.quantity);
          setTotalPrice(products.quantity * products.price);
        }
      });
    }
  }, [cartProducts]);

  const handleClick = () => {
    if (product.available > selected) {
      setSelected(selected + 1);
    }
    props.callProducts(product, selected);
  };

  return (
    <div
      style={{
        width: "30%",
        margin: "30px",
      }}
    >
      <div
        className="card border border-5"
        style={{ width: "18rem", height: "27rem" }}
      >
        <img
          className="card-img-top"
          style={{
            marginLeft: "70px",
            width: "120px",
            height: "120px",
          }}
          src={product.img}
          alt="Card image cap"
        />
        <div className="card-body text-center">
          <h5 className="card-title bg-secondary ">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <h5 className="card-title bg-secondary fs-6">Rs.{product.price}</h5>
          <p className="card-text">Left : {product.available}</p>
        </div>

        <div className="d-flex d-row">
          <p className="card-text col-md-7">Selected : {selected}</p>
          <p className="card-text col-md-7">Total price : {totalPrice}</p>
        </div>

        <button
          className="cart-btn btn btn-primary btn-sm col-md-4 mx-auto px-2"
          onClick={handleClick}
        >
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
