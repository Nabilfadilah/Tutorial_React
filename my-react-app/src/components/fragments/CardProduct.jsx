import React from "react";
import ButtonAll from "../elements/button";

const CardProduct = (props) => {
  // destructuring
  const { children } = props;

  return (
    <div>
      <div className="w-full max-w-sm bg-gray-200 border border-gray-300 rounded-lg shadow">
        {children}
      </div>
    </div>
  );
};

// bisa tidak pakai props atau pakai juga bisa, seperti (image, title, price)
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
  const { children, title } = props;

  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {title}
        </h5>
        <p className="text-m text-black">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  // destrukturing
  const { price } = props;

  return (
    <div className="flex px-5 pb-3 items-center justify-between">
      <span className="text-xl font-bold text-black">{price}</span>
      <ButtonAll className="bg-blue-600">Add To Cart</ButtonAll>
    </div>
  );
};

// pemanggilan komponen untuk props cildren
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
