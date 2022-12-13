import { useContext, useState, useEffect } from "react";
import { CartContext } from "../App";

const CartCard = (props) => {
  const { product } = props;
  const [count, setCount] = useState(0);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    cartProducts.map((products) => {
      if (product.id === products.id) {
        products.quantity = products.quantity;
        setCount(products.quantity);
      }
    });
  }, [cartProducts, isChecked]);

  /*@function - increment the quantity of a product by 1
   */
  const increment = () => {
    cartProducts.map((products) => {
      if (product.id === products.id) {
        if (product.available > products.quantity) {
          products.quantity = products.quantity + 1;
          setCount(products.quantity);
        }
      }
    });
  };

  /*@function - decrement the quantity of a product by 1
   */
  const decrement = () => {
    cartProducts.map((products) => {
      if (product.id === products.id) {
        if (products.quantity > 0) {
          products.quantity = products.quantity - 1;
          setCount(products.quantity);
        }
      }
    });
  };

  /*@function - remove a product from cart
   */
  const removeFromCart = () => {
    const remove = cartProducts.filter(
      (products) => product.id !== products.id
    );
    setCartProducts(remove);
  };

  /*@function - set isChecked to true or false and determine checkout products
   */
  const handleChecked = () => {
    setIsChecked((current) => !current);
    props.getCheckoutItems(!isChecked, product);
  };

  return (
    <div>
      <div className="cart-container mt-4 border border-3 border-dark">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
        ></input>

        <div className="row align-items-center">
          <div className="col">
            <img src={product.img} className="" alt="..." />
          </div>
          <div className="col">{product.name}</div>
          <div className="col">Rs.{product.price}</div>
          <div className="col">Left : {product.available}</div>
          <div className="col-md-auto">
            <div className="d-flex rounded-3 align-items-center px-3 border border-2 border-dark justify-content-center">
              <button
                className="btn btn-sm bg-primary mb-1 mt-1"
                onClick={increment}
              >
                +
              </button>
              <div className="form-check form-check-inline">
                Selected : {count}
              </div>
              <div className="form-check form-check-inline font-weight-bold">
                Total Price : {product.quantity * product.price}
              </div>
              {count > 1 && (
                <button className="btn btn-sm bg-primary" onClick={decrement}>
                  -
                </button>
              )}
            </div>
          </div>
          <div className="col">
            <button
              className="btn btn-sm bg-danger px-4"
              onClick={removeFromCart}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
