import Filter from "./Filter";
import { getProducts } from "../service/products";
import { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../App";
import Cards from "./Cards";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const { cartProducts, setCartProducts } = useContext(CartContext);

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === true) {
      const fetchProducts = async () => {
        getProducts().then((data) => {
          setProducts(data);
        });
      };

      fetchProducts();
    }
    return () => {
      effectRan.current = true;
    };
  }, []);

  const callSort = (product) => {
    setProducts([...product]);
  };

  const callSearchItems = (searchVal) => {
    setSearch(searchVal);
  };

  //set cartProducts and updating quantity
  const callProducts = (product, selected) => {
    const productExist = cartProducts.find((item) => item.id === product.id);
    if (product.available > selected) {
      if (productExist) {
        setCartProducts(
          cartProducts.map((item) =>
            item.id === product.id
              ? { ...productExist, quantity: productExist.quantity + 1 }
              : item
          )
        );
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
