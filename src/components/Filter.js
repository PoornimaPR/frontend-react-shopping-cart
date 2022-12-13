import { useState } from "react";

const Filter = (props) => {
  const { products } = props;

  const [sortType, setSortType] = useState("ascending");

  /*@function - check sortType and sort products by name
   */
  const sortByName = (e) => {
    if (sortType === "ascending") {
      products.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (sortType === "descending") {
      products.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
    props.callSort(products);
  };

  /*@function - check sortType and sort products by price
   */
  const sortByPrice = (e) => {
    if (sortType === "ascending") {
      products.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (sortType === "descending") {
      products.sort((a, b) => (a.price < b.price ? 1 : -1));
    }
    props.callSort(products);
  };

  /*@function - check sortType and sort products by quantity
   */
  const sortByQuantity = (e) => {
    if (sortType === "ascending") {
      products.sort((a, b) => (a.available > b.available ? 1 : -1));
    } else if (sortType === "descending") {
      products.sort((a, b) => (a.available < b.available ? 1 : -1));
    }
    props.callSort(products);
  };

  /*@function - set ascending/descending based on user choice
   */
  const changeSortType = () => {
    sortType === "ascending"
      ? setSortType("descending")
      : setSortType("ascending");
  };

  /*@function - pass user typed text to home page
   */
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
            onClick={changeSortType}
          >
            Change to {sortType === "ascending" ? "descending" : "ascending"}
          </button>
        </form>
      </nav>
    </>
  );
};

export default Filter;
