import { useEffect, useState } from "react";

const Filter = (props) => {
  const { products } = props;

  //const [radio, setRadio] = useState("");
  const [name, setName] = useState("ascending");

  const sortByName = (e) => {
    //setRadio(e.target.value);
    if (name === "ascending") {
      products.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (name === "descending") {
      products.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
    props.callSort(products);
  };

  const sortByPrice = (e) => {
    // setRadio(e.target.value);
    if (name === "ascending") {
      products.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (name === "descending") {
      products.sort((a, b) => (a.price < b.price ? 1 : -1));
    }
    props.callSort(products);
  };

  const sortByQuantity = (e) => {
    //setRadio(e.target.value);
    if (name === "ascending") {
      products.sort((a, b) => (a.available > b.available ? 1 : -1));
    } else if (name === "descending") {
      products.sort((a, b) => (a.available < b.available ? 1 : -1));
    }
    props.callSort(products);
  };

  const handleCase = () => {
    name === "ascending" ? setName("descending") : setName("ascending");
  };

  const getSearchItems = (e) => {
    let searchVal = e.target.value;
    props.callSearchItems(searchVal);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-info d-flex justify-content-end px-3">
        <form className="d-flex flex-row gap-3">
          <input
            className="form-control"
            type="search"
            placeholder="Filter By Text"
            aria-label="Search"
            onChange={getSearchItems}
          />
          <div className="d-flex bg-light rounded-pill align-items-center px-2 gap-2 ">
            <label className="control-label col-md-2">SortBy: </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="name"
                onClick={sortByName}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Name
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="price"
                onClick={sortByPrice}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Cost
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="quantity"
                onClick={sortByQuantity}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Quantity
              </label>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-sm col-md-3 "
            onClick={handleCase}
          >
            Change to {name === "ascending" ? "descending" : "ascending"}
          </button>
        </form>
      </nav>
    </>
  );
};

export default Filter;
