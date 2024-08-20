import React, { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/UseLogin";
import ButtonAll from "../elements/button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  // untuk memanggil username
  const userName = useLogin();

  // state total cart
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  // handle untuk logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  // pemanggilan dark mode with useContext
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }

  return (
    <div>
      <div className="flex justify-end h-20 bg-teal-800 text-white items-center px-10">
        {userName}
        <ButtonAll className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </ButtonAll>

        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
          Item : {totalCart} | price : $ {total}
        </div>

        <ButtonAll
          className="bg-yellow-700 px-10 mx-5 text-white rounded"
          // jika posisinya true maka set false, dan jika posisinya false set jadi true
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </ButtonAll>
      </div>
    </div>
  );
};

export default Navbar;
