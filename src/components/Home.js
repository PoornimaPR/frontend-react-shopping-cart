import { useContext, useEffect, useState } from "react";
import Filter from "./Filter";
import { getProducts } from "../service/products";
import { CartContext } from "../App";
import Cards from "./Cards";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const { cartProducts, setCartProducts } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      getProducts().then((data) => {
        setProducts(data);
      });
    };

    fetchProducts();
  }, []);

  /*@function - display sorted products based on name/price/quantity
   */
  const callSort = (product) => {
    setProducts([...product]);
  };

  /*@function - display searched products based on text box value
   */
  const callSearchItems = (searchVal) => {
    setSearch(searchVal);
  };

  /*@function - set cartProducts and updating quantity
   */
  const callProducts = (product, selected) => {
    const productExist = cartProducts.find((item) => item.id === product.id);
    if (product.available > selected) {
      if (productExist) {
        if (selected === 0) {
          cartProducts.pop();
          setCartProducts([...cartProducts]);
        } else {
          setCartProducts(
            cartProducts.map((item) =>
              item.id === product.id
                ? { ...productExist, quantity: selected }
                : item
            )
          );
        }
      } else {
        setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
      }
    }
  };

  return (
    <>
      <Filter
        products={products}
        callSort={(products) => callSort(products)}
        callSearchItems={(searchVal) => callSearchItems(searchVal)}
      />
      <div className="productContainer">
        {products
          .filter((product) => {
            return search.toLowerCase() === ""
              ? product
              : product.name.toLowerCase().includes(search);
          })
          .map((product) => (
            <div key={product.id}>
              <Cards
                key={product.id}
                product={product}
                callProducts={(product, selected) =>
                  callProducts(product, selected)
                }
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
