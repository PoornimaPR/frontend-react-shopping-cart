import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { updateProducts } from "../service/products";
import CheckoutCard from "./CheckoutCard";
import { CartContext } from "../App";

const Checkout = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const location = useLocation();
  const checkout = location.state.checkoutProducts;

  const navigate = useNavigate();

  // checkout will have checked products
  //cartProd will have all cart Products
  // we have to filter the uncommon and put it in cartProducts again
  const filterCartProducts = (arr1, arr2) => {
    let res = [];
    res = arr1.filter((elem) => !arr2.find(({ id }) => elem.id === id));
    return res;
  };

  /*@function - once payment is done, update the available quantity of products
   */
  const updateAvailable = () => {
    updateProducts(checkout).then((data) => {
      setCartProducts(filterCartProducts(cartProducts, checkout));
      if (checkout.length === 0) {
        toast.error("No products to checkout", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.success("Payment successful", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/", { replace: true });
      }
    });
  };

  return (
    <div>
      <nav className="navbar navbar-light px-sm-5">
        <button className="btn btn-sm bg-primary">
          <Link to="/cart" className="p-2 text-decoration-none text-white">
            Back to Cart
          </Link>
        </button>

        <button className="btn btn-sm bg-primary" onClick={updateAvailable}>
          Proceed to payment
        </button>
      </nav>

      <div className="productContainer">
        {checkout.map((product) => (
          <div key={product.id}>
            <CheckoutCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
