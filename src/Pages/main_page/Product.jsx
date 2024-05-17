// import React from "react";
import { NavLink } from "react-router-dom";
import Currency from "../../helper/Currency";
const Product = (currEle) => {
  const { id, name, image, price, category } = currEle;
  return (
    <div>
      <NavLink to={`/Single_prod/${id}`}>
        <div className="card">
          <figure className="pr-5 px-10">
            <figcaption>{category}</figcaption>
            <img
              src={image}
              alt="Loading"
              className="h-48 w-full rounded-lg shadow-md"
            />
          </figure>

          <div className="prod_data flex justify-between px-10">
            <p>{name}</p>
            <p>
              <Currency price={price} />
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
