import React from "react";
import { cartHook } from "./context/cart_context";
import PageNavigation from "./Pages/main_page/PageNavigation";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeItemFromCart, clearCart } = cartHook();
  const navigate = useNavigate();

  const handleDelete = (index) => {
    removeItemFromCart(index);
  };

  const handleClear=()=>{
    clearCart();
  };

  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  const gstPrice = totalPrice * 0.28;
  return (
    <div className="">
      <div className="h-12 p-4 text-lg bg-slate-300 ">
        <PageNavigation title="Cart" />
      </div>

      <div className="flex justify-center align-middle p-5 pb-0 ">
        <div className="w-2/3 flex justify-between text-lg font-medium">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Sub-Total</p>
        </div>
      </div>

      <hr className="mx-60 my-2 border-black " />
      {cart.length > 0 ? (
        cart.map((item, index) => {
          return (
            <>
              <div className="flex justify-center align-middle gap-5">
                <div className="bg-slate-100 w-2/3 flex justify-between p-2">
                  <div className="w-56 h-20  flex space-x-5">
                    {" "}
                    <img src={item.image[0].url} alt="...loading" />
                    <p>{item.name}</p>
                  </div>

                  <div>{item.price}</div>
                  <div>-</div>

                  <div>-</div>
                </div>
                <div
                  className="cursor-pointer m-2"
                  onClick={() => handleDelete(index)}
                >
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>

              <hr className="mx-72 my-2 " />
            </>
          );
        })
      ) : (
        <div className="flex justify-center text-gray-400 font-extrabold text-2xl">
          Your cart is empty
        </div>
      )}

      <hr className="mx-60 my-2 border-black" />

      <div className="flex justify-center py-2">
        <div className="flex justify-between  w-2/3 pr-5">
          <button
            className="bg-blue-200 p-3 rounded-md "
            onClick={() => navigate("/ProductList")}
          >
            Continue Shopping
          </button>
          <button className="bg-orange-300 p-3 rounded-md" onClick={handleClear}>Clear Cart</button>
        </div>
      </div>

      <div className="flex justify-end pe-72 py-8">
        <div className="w-1/4 p-3 bg-gray-100 rounded-md">
          <div className="py-2">Total Amount: {totalPrice.toFixed(2)}</div>
          <div className="py-2">GST: {gstPrice.toFixed(2)}</div>
          <hr className="border-black py-1" />
          <div className="py-2">
            Grand Total:{(totalPrice + gstPrice).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
