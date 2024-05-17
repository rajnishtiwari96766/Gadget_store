import React from "react";
import { customHook2 } from "../../context/filter_context";
import Single_prod from "./Single_prod";

const Sorting = () => {
  const {
    gridView,
    listView,
    filter_products,
    sort,
    company_sort,
    filters: { text, category },
    all_products,
    update_filter,
  } = customHook2();

  const comp_name = filter_products.map((data, index) => data.company);

  const getUniqueData = (data, property) => {
    let newValue = data.map((currElem) => {
      return currElem[property];
    });

    //implementing set in an array to get a unique data
    newValue = ["All", ...new Set(newValue)];
    return newValue;
  };
  const category_product_data = getUniqueData(all_products, "category");

  return (
    <div className="flex justify-between p-2">
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
              className="px-2"
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
          <select name="filter" id="filter" onChange={company_sort}>
            {["Select Brand", ...new Set(comp_name)].map((data, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <option value="">
                  {data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()}
                </option>
              );
            })}
          </select>
        </form>
      </div>

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
    </div>
  );
};

export default Sorting;
