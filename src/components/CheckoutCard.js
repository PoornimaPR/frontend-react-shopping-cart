const CheckoutCard = (props) => {
  const { product } = props;
  return (
    <div
      className="container mt-4 border border-3 border-dark"
      style={{ width: "100vw" }}
    >
      <div className="row align-items-center">
        <div className="col">
          <img src={product.img} className="" alt="..." />
        </div>
        <div className="col">{product.name}</div>
        <div className="col-6">{product.description}</div>
        <div className="col">Rs.{product.price}</div>
      </div>

      <div className=" row align-items-center justify-content-center">
        <div className="col-4">
          <div className="d-flex rounded-3 align-items-center px-3 border border-2 border-dark mb-2">
            <div className="form-check form-check-inline">
              Selected : {product.quantity}
            </div>
            <div
              className="form-check form-check-inline"
              style={{ fontWeight: "bold" }}
            >
              Total Price : {product.quantity * product.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
