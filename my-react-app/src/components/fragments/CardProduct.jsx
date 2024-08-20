import React from "react";
import ButtonAll from "../elements/button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

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
  const { image, id } = props;

  return (
    <Link to={`/product/${id}`}>
      <img
        // src="/images/shoes1.jpg"
        src={image}
        alt="products"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  // destructuring
  const { children, name } = props;

  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {name.substring(0, 20)}...
        </h5>
        <p className="text-s text-black">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  // destrukturing
  const { price, id } = props;
  // memanggil dispatch
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-black">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <ButtonAll
        className="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
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
