import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

const CartPage = () => {
  const item = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleoneCart = () => {
    dispatch(removeItem());
  };
  return (
    <div className="mx-30">
      {/* <div className='p-5 border border-black h-[400px]'>
        <div className='border p-8'>
          <h3 className='font-bold'>Account</h3>
          <h3 className='mt-5 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>To place your order now, log in to your existing account or sign up</h3>
          <span className=' flex py-5 '>
            <button className='cursor-pointer block rounded-lg px-10 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 '>Log in</button>
            <button className='cursor-pointer rounded-md bg-indigo-600 px-10 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-10'>Sign up</button>
          </span>
        </div>
        <div className='mt-5 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
          Delivery Address
        </div>
        <div className='mt-5 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
          Payment
        </div>
      </div> */}
      <div className="w-6/12 m-auto mt-10">
        <span className="justify-between items-center flex">
          <h1 className="text-2xl font-bold">CARTS</h1>
          <button
            className="p-2 m-2 bg-black text-white  cursor-pointer rounded-xl shadow min-w-[100px]"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <button
            className="p-2 m-2 bg-black text-white  cursor-pointer rounded-xl shadow min-w-[100px]"
            onClick={handleoneCart}
          >
            Clear one data
          </button>
          {item.length === 0 && (
            <h1 className="text-2xl font-bold">No Items in Cart</h1>
          )}
        </span>

        <ItemList data={item} />
      </div>
    </div>
  );
};

export default CartPage;
