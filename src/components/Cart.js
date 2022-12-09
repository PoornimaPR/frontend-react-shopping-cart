import Filter from "./Filter";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const [checkoutProducts, setCheckoutProducts] = useState(cartProducts);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {}, [checkoutProducts]);

  const getCheckoutItems = (isChecked, product) => {
    if (isChecked) {
      setCheckoutProducts([...checkoutProducts, product]);
    } else {
      setCheckoutProducts(
        checkoutProducts.filter((products) => products.id !== product.id)
      );
    }
  };

  //filter the removed products and send to checkout
  const updateRemove = (arr1, arr2) => {
    let res = [];
    res = arr1.filter((el) => arr2.find((element) => element.id === el.id));

    if (checkoutProducts.length === 0) {
    } else {
      navigate(
        "/checkout",
        { state: { checkoutProducts: res } },
        { replace: true }
      );
    }
  };

  const callSort = (product) => {
    setCartProducts([...product]);
  };

  const callSearchItems = (searchVal) => {
    setSearch(searchVal);
  };

  return (
    <>
      <Filter
        products={cartProducts}
        callSort={(cartproducts) => callSort(cartproducts)}
        callSearchItems={(searchVal) => callSearchItems(searchVal)}
      />
      <nav className="navbar navbar-light px-sm-5">
        <button className="btn btn-sm bg-primary">
          <Link to="/" className="p-2 text-decoration-none text-white">
            Back to Home
          </Link>
        </button>

        <button
          className="btn btn-sm bg-primary"
          onClick={() => updateRemove(cartProducts, checkoutProducts)}
        >
          Go to Checkout
        </button>
      </nav>

      <div className="productContainer">
        {cartProducts.length > 0 ? (
          cartProducts
            .filter((product) => {
              return search.toLowerCase() === ""
                ? product
                : product.name.toLowerCase().includes(search);
            })
            .map((product) => (
              <div key={product.id}>
                <CartCard
                  key={product.id}
                  product={product}
                  getCheckoutItems={(isChecked, product) =>
                    getCheckoutItems(isChecked, product)
                  }
                />
              </div>
            ))
        ) : (
          <div>
            <h1 className="text-danger">Cart is Empty!! </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
