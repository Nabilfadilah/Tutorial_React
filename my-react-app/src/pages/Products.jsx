import React, { useEffect, useRef, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import ButtonAll from "../components/elements/button";
import Counter from "../components/fragments/Counter";
import { getProducts } from "../services/Product.services";
import { getUsername } from "../services/Auth.services";
import { useLogin } from "../hooks/UseLogin";

// stateless/function component
const ProductsPage = () => {
  // state cart useState
  const [cart, setCart] = useState([]);
  // useEffect untuk memanipulasi komponen
  const [totalPrice, setTotalPrice] = useState(0);
  // untuk get product
  const [products, setProducts] = useState([]);
  // untuk memanggil username
  const userName = useLogin();

  useEffect(() => {
    // setCart([{ id: 1, qty: 1 }]);
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    // JSON.parse, adalah untuk mengkonfersi JOSN string menjadi Objek
  }, []); // defendensi bisa kosong, agar gak error

  // untuk memanggil name with API
  // useEffect(() => {
  //   // tangkap tokennya!
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setUserName(getUsername(token));
  //   } else {
  //     window.location.href = "/login";
  //   }
  // }, []);

  // memanggil API get all
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      // console.log(data);
    });
  }, []);

  // cara menggunakan didunmoun yaiti pakai useEffect
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      // agar menyimpan ke localStorage, agar ketika di refres masih ada
      localStorage.setItem("cart", JSON.stringify(cart));
      // JSON.stringify, adalah sebuah function untuk konfersi JS value menjadi JSON
    }
  }, [cart, products]);

  // handle untuk logout
  const handleLogout = () => {
    localStorage.removeItem("token");
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

  // useRef
  // const cartRef = useRef([{ id: 1, qty: 1 }]);
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  // total price
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
    <>
      {/* sidebar */}
      <div className="flex justify-end h-20 bg-teal-800 text-white items-center px-10">
        {userName}
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
        <div className="w-3/4 flex flex-wrap">
          {/* mapping data produk untuk Rendering List */}
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                {/* bisa tidak pakai props atau pakai juga bisa, seperti (image, name, price) */}
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                  // handleAddToCart={handleAddToCartRef}
                />
              </CardProduct>
            ))}
        </div>

        {/* Card */}
        <div className="w-2/5">
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
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
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

// list produk data, untuk mapping banyak data dalam array
// const products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     price: 1000000,
//     image: "/images/shoes1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Exercitationem suscipit qui ad facilis sunt consectetur consequuntur
//           tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
//           quos repudiandae optio ducimus ipsam.`,
//   },
//   {
//     id: 2,
//     name: "Sepatu Lama",
//     price: 500000,
//     image: "/images/shoes2.jpg",
//     description: `tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
//           quos repudiandae optio ducimus ipsam.`,
//   },
//   {
//     id: 3,
//     name: "Sepatu Lumayan",
//     price: 1400000,
//     image: "/images/shoes1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Exercitationem suscipit qui ad facilis sunt consectetur consequuntur
//           tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
//           quos repudiandae optio ducimus ipsam.`,
//   },
// ];
