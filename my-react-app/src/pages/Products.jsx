import React, { useEffect, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import ButtonAll from "../components/elements/button";
import Counter from "../components/fragments/Counter";

// stateless/function component
const ProductsPage = () => {
  // state cart useState
  const [cart, setCart] = useState([]);

  // useEffect untuk memanipulasi komponen
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    // setCart([{ id: 1, qty: 1 }]);
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    // JSON.parse, adalah untuk mengkonfersi JOSN string menjadi Objek
  }, []); // defendensi bisa kosong, agar gak error

  // cara menggunakan didunmoun yaiti pakai useEffect
  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      // agar menyimpan ke localStorage, agar ketika di refres masih ada
      localStorage.setItem("cart", JSON.stringify(cart));
      // JSON.stringify, adalah sebuah function untuk konfersi JS value menjadi JSON
    }
  }, [cart]);

  // handle untuk logout
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  // handle add cart
  const handleAddToCart = (id) => {
    // mengecek apakah ada id yang sudah ditampilkan?
    if (cart.find((item) => item.id === id)) {
      // jika ada maka set idnya agar cuma qty yang bertambah
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      {/* sidebar */}
      <div className="flex justify-end h-20 bg-teal-800 text-white items-center px-10">
        {email}
        <ButtonAll className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </ButtonAll>
      </div>
      <div className="flex justify-center py-5">
        {/* <CardProduct> */}
        {/* bisa tidak pakai props atau pakai juga bisa, seperti (image, name, price) */}
        {/* <CardProduct.Header image="images/shoes1.jpg"></CardProduct.Header>
        <CardProduct.Body name="Sepatu Paling Baru deh">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit qui ad facilis sunt consectetur consequuntur
          tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
          quos repudiandae optio ducimus ipsam.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000"></CardProduct.Footer> */}
        {/* </CardProduct> */}

        {/* useState */}
        <div className="w-3/6 flex flex-wrap">
          {/* mapping data produk untuk Rendering List */}
          {products.map((product) => (
            <CardProduct key={product.id}>
              {/* bisa tidak pakai props atau pakai juga bisa, seperti (image, name, price) */}
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>

        {/* Card */}
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}

              {/*  */}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* coba-coba state di fragment */}
      <div className="flex justify-center">
        <Counter></Counter>
      </div>
    </>
  );
};

export default ProductsPage;

// tangkap emailnya!
const email = localStorage.getItem("email");

// list produk data, untuk mapping banyak data dalam array
const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit qui ad facilis sunt consectetur consequuntur
          tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
          quos repudiandae optio ducimus ipsam.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 500000,
    image: "/images/shoes2.jpg",
    description: `tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
          quos repudiandae optio ducimus ipsam.`,
  },
  {
    id: 3,
    name: "Sepatu Lumayan",
    price: 1400000,
    image: "/images/shoes1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit qui ad facilis sunt consectetur consequuntur
          tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
          quos repudiandae optio ducimus ipsam.`,
  },
];
