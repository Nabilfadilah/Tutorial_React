import React, { useEffect, useState } from "react";
import { useLogin } from "../../hooks/UseLogin";
import ButtonAll from "../elements/button";
import { useSelector } from "react-redux";

const Navbar = () => {
  // untuk memanggil username
  const userName = useLogin();

  // state total cart
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

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

  return (
    <div>
      <div className="flex justify-end h-20 bg-teal-800 text-white items-center px-10">
        {userName}
        <ButtonAll className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </ButtonAll>

        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
          {totalCart}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
