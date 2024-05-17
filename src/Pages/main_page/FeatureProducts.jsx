// import React from "react";
import { customHook1 } from "../../context/prod_context";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = customHook1();

  // console.log(featureProducts)

  if (isLoading) {
    return <p>...Loading</p>;
  }
  return (
    <div className="h-64 bg-slate-200 flex p-2">
      <div className="heading flex flex-col w-1/5 h-full justify-center items-center text-2xl">
        Our Products
      </div>

      <div className="flex justify-between px-5 ">
        {featureProducts.map((currEle) => {
          return <Product key={currEle.id} {...currEle} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
