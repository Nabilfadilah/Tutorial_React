import React from "react";
import CardProduct from "../components/fragments/CardProduct";
import ButtonAll from "../components/elements/button";

const ProductsPage = () => {
  // handle untuk logout
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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

        {/* mapping data produk untuk Rendering List */}
        {products.map((product) => (
          <CardProduct key={product.id}>
            {/* bisa tidak pakai props atau pakai juga bisa, seperti (image, name, price) */}
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
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
    price: "Rp. 1.000.000",
    image: "/images/shoes1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit qui ad facilis sunt consectetur consequuntur
          tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
          quos repudiandae optio ducimus ipsam.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp. 500.000",
    image: "/images/shoes2.jpg",
    description: `tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
          quos repudiandae optio ducimus ipsam.`,
  },
  {
    id: 3,
    name: "Sepatu Lumayan",
    price: "Rp. 1.400.000",
    image: "/images/shoes1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit qui ad facilis sunt consectetur consequuntur
          tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
          quos repudiandae optio ducimus ipsam.`,
  },
];
