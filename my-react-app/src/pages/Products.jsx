import React from "react";
import CardProduct from "../components/fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        {/* bisa tidak pakai props atau pakai juga bisa, seperti (image, title, price) */}
        <CardProduct.Header image="images/shoes1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit qui ad facilis sunt consectetur consequuntur
          tempora ipsum voluptates explicabo voluptate eligendi ipsa fugit, quae
          quos repudiandae optio ducimus ipsam.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
