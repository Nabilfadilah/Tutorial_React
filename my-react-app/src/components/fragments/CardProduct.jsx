import React from "react";
import ButtonAll from "../elements/button";

const CardProduct = (props) => {
  // destructuring
  const { children } = props;

  return (
    <div>
      <div className="w-full max-w-xs bg-gray-200 border border-gray-300 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

// bisa tidak pakai props atau pakai juga bisa, seperti (image, name, price)
const Header = (props) => {
  // destructuring
  const { image } = props;

  return (
    <a href="#">
      <img
        // src="/images/shoes1.jpg"
        src={image}
        alt="products"
        className="p-8 rounded-t-lg"
      />
    </a>
  );
};

const Body = (props) => {
  // destructuring
  const { children, name } = props;

  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {name}
        </h5>
        <p className="text-m text-black">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  // destrukturing
  const { price, handleAddToCart, id } = props;

  return (
    <div className="flex px-5 pb-3 items-center justify-between">
      <span className="text-xl font-bold text-black">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <ButtonAll className="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </ButtonAll>
    </div>
  );
};

// pemanggilan komponen untuk props cildren
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
