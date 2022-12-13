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
      }, []);
    }
  }, [cartProducts]);

  const updateSelected = (e) => {
    const value = e.target.value;
    let count = selected;
    if (value === "inc") {
      if (product.available > selected) {
        count = count + 1;
      }
    } else if (value === "dec") {
      count = count - 1;
    }
    setSelected(count);
    props.callProducts(product, count);
  };

  return (
    <div className="card-container">
      <div className="card-size border border-5">
        <img className=" card-image " src={product.img} alt="Card image cap" />
        <div className="card-body text-center">
          <h5 className="card-title bg-secondary ">{product.name}</h5>
          <p className="card-text text-wrap">{product.description}</p>
          <h5 className="mt-7 bg-secondary fs-6 ">Rs.{product.price}</h5>
          <p className="card-text">Left : {product.available}</p>
        </div>

        <br></br>
        <div className="d-flex d-row ">
          <div className="card-text col-md-7 px-3">
            {!selected && (
              <button
                className="cart-btn btn btn-primary btn-sm"
                onClick={updateSelected}
                value="inc"
              >
                Add to Cart
              </button>
            )}
            {selected > 0 && (
              <div>
                <button
                  className="btn btn-sm bg-primary"
                  onClick={updateSelected}
                  value="inc"
                >
                  +
                </button>
                <span className="px-3">{selected}</span>
                <button
                  className="btn btn-sm bg-primary"
                  onClick={updateSelected}
                  value="dec"
                >
                  -
                </button>
              </div>
            )}
          </div>
          <p className="card-text col-md-7">Total price : {totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
