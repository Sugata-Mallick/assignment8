import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Details from "../Details/Details";
import Total from "../Total/Total";
import "./Body.css";

const Body = () => {
  const [details, setDetails] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    fetch("./card.JSON")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const handleVisit = (detail) => {
    const newTotal = [...total, detail];
    setTotal(newTotal);
  };

  return (
    <div className="container-fluid mb-5 row ">
      <div className="row row-cols-1 row-cols-md-3 g-4 col-lg-9">
        {details.map((detail, i) => (
          <Details key={i} details={detail} handleVisit={handleVisit}></Details>
        ))}
      </div>

      <div className="cart-container">
        <Total total={total}></Total>
      </div>
    </div>
  );
};

export default Body;
