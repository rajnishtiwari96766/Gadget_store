import React, { useEffect, useState } from "react";
import { customHook2 } from "../../context/filter_context";
import Currency from "../../helper/Currency";

const Sorting = ({ product }) => {
  const {
    gridView,
    listView,
    filter_products,
    sort,
    filters: { text, category, company, color,price },
    all_products,
    update_filter,
    clearFilter
  } = customHook2();

  const [value, setValue] = useState(0);


  const getUniqueData = (data, property) => {
    let newValue = data.map((currElem) => {
      return currElem[property];
    });

    if (property === "colors") {
      return (newValue = ["All", ...new Set(newValue.flat())]);
    }
    else {
      //implementing set in an array to get a unique data
      return (newValue = ["All", ...new Set(newValue)]);
    }
  };

  const category_product_data = getUniqueData(all_products, "category");
  const company_product_data = getUniqueData(all_products, "company");
  const color_product_data = getUniqueData(all_products, "colors");
  const price_data=getUniqueData(all_products,"price");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  console.log(price_data);
  const ans= price_data.filter((data)=>{
    return data < value;
    
  })
  console.log(ans);

  // const handleReload=()=>{
  //   window.location.reload();
  // }

  return (
    <div className="flex justify-between p-2 items-center">
      <div>
        <button className="p-2" onClick={gridView}>
          <i class="fa-solid fa-grip fa-xl"></i>
        </button>
        <button onClick={listView}>
          <i class="fa-solid fa-list fa-lg"></i>
        </button>
      </div>

      {/* getting the category-wise filtered data */}
      <div>
        {category_product_data.map((currElem, index) => {
          return (
            <button
              className="px-2 cursor-pointer"
              key={index}
              type="button"
              name="category"
              value={currElem}
              onClick={update_filter}
            >
              {currElem}
            </button>
          );
        })}
      </div>

      <div>
        <form>
          <select name="company" id="company" onChange={update_filter} >
            {company_product_data.map((data, index) => {
              return (
                <option value={data} name="company">{data}</option>
              )
            })}
          </select>
        </form>
      </div>

      <div>
        {color_product_data.map((currElem, index) => {
          return (
            <button
              className={`px-2 m-1 cursor-pointer rounded-lg ${currElem !== color ? 'opacity-50' : ''}`}
              style={{ backgroundColor: currElem }}
              key={index}
              name="color"
              value={currElem}
              onClick={update_filter}
            >
              {currElem}
            </button>
          )
        })
        }
      </div>

      {/* For the number of products available on screen */}
      <div>{`${filter_products.length} Products Available`}</div>

      <div>
        <form>
          <select name="filter" id="filter" onChange={sort}>
            <option value="lowest">Lowest-Price</option>
            <option value="highest">Highest-Price</option>
            <option value="a-z">Products A-Z</option>
            <option value="z-a">Products Z-A</option>
          </select>
        </form>
      </div>
 
      {/* Price range filter */}
      <div>
        <label htmlFor="rangeInput">Value: <Currency price={value}></Currency></label>
        <input type="range" id="rangeInput" min={0} max={6000000} defaultValue={6000000}
        value={value} onChange={handleChange} onClick={update_filter} name="price"/>
      </div>

      {/* Clear filter option */}
      <button className="btn btn-primary" type="button" onClick={clearFilter}>
        Clear
      </button>
       
    </div>


    
  );
};

export default Sorting;
