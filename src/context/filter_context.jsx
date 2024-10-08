import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { customHook1 } from "./prod_context";
import reducer from "../reducer/filter_reducer";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort_value: "lowest",
  filters:{
    text:"",
    category:"All",
    company:"All",
    color:"All",
    price:0,
  },
};

// In FilterContextProvider
export const FilterContextProvider = ({ children }) => {
  const { products } = customHook1();

  const [state, dispatch] = useReducer(reducer, initialState);

  //to create gridView
  const gridView = () => {
    dispatch({ type: "gridDisplay" });
  };

  const listView = () => {
    dispatch({ type: "listView" });
  };

  useEffect(() => {
    dispatch({ type: "Load_all_prod", payload: products });
  }, [products]);

  //sorting the products
  const sort = (event) => {
    const filter_option=event.target.value;
    dispatch({ type: "sort_elements", payload: filter_option });
  };

  //to update the filter_value,this is for the searchbar
  const update_filter=(event)=>{
    let name=event.target.name;
    let value=event.target.value;

    return dispatch({type:"update_filter_values", payload:{name,value}})
  }

  //to clear filter
  const clearFilter=()=>{
    return dispatch({type:'clear_filter'})
  }

  useEffect(() => {
    dispatch({type:"filtered_products"})
    dispatch({type:"sort_data"})
  }, [products,state.sort_value,state.filters]);

  return (
    <FilterContext.Provider value={{ ...state, gridView, listView, sort,update_filter,clearFilter}}>
      {children}
    </FilterContext.Provider>
  );
};

export const customHook2 = () => {
  return useContext(FilterContext);
};

export { FilterContext };
