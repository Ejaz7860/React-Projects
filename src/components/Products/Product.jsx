import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getClassDetails = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "https://fakestoreapi.com/products",
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClassDetails();
  },[]);

  return <div>Product</div>;
};

export default Product;
