import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  // mengambil dari state manajemen/store
  const cart = useSelector((state) => state.cart.data);
  // const [totalPrice, setTotalPrice] = useState(0);
  // pemanggilan dark mode with useContext
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  // cara menggunakan didunmoun yaitu pakai useEffect
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      // setTotalPrice(sum);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      // agar menyimpan ke localStorage, agar ketika di refres masih ada
      localStorage.setItem("cart", JSON.stringify(cart));
      // JSON.stringify, adalah sebuah function untuk konfersi JS value menjadi JSON
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);
  // console.log(totalPriceRef);
  // memanipulasi
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <div>
      <table
        className={`text-left table-auto border-separate border-spacing-x-5 ${
          isDarkMode && "text-white"
        }`}
      >
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              return (
                <tr key={item.id}>
                  <td>{product.title.substring(0, 15)}...</td>
                  <td>
                    ${" "}
                    {product.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    ${" "}
                    {(item.qty * product.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              );
            })}

          {/* total price */}
          <tr ref={totalPriceRef}>
            <td colSpan={3}>
              <b>Total Price</b>
            </td>
            <td>
              <b>
                ${" "}
                {total.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "USD",
                })}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCart;
