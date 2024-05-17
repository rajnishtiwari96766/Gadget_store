//creat contextAPI -> Create appProvider -> create usecontext hooks

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/prod_reducer";


const context1 = createContext();

const api = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getproducts = async (url) => {
    dispatch({ type: "Data_Loading" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      console.log({products});
      dispatch({ type: "Get_Data", payload: products });
      //payload means what do you need during the state
    } catch (error) {
      dispatch({ type: "Error_Occurred" });
    }
  };

  //2nd API call for single products...
  const getSingleProducts = async (url) => {
    dispatch({ type: "single_prod_Loading" });
    try {
      const res = await axios.get(url);
      const sing_prod = await res.data;
     
      dispatch({ type: "single_prod_get", payload: sing_prod });
    } catch (error) {
      dispatch({ type: "single_prod_error" });
    }
  };

  useEffect(() => {
    getproducts(api);
  }, []);

  return (
    <context1.Provider value={{ ...state, getSingleProducts }}>
      {children}
    </context1.Provider>
  );
};

//custom hooks
const customHook1 = () => {
  return useContext(context1);
};

export { context1, Provider, customHook1 };
