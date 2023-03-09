import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  let navigate = useNavigate();
  return (
    <div style={{cursor:"pointer"}} onClick={() => navigate(`${item.path}`)}>
      <img src={item.image} id="footer-img" alt={item.header} />
      <br />
      <br />
      <h4>{item.header}</h4>
      <br />
      <p>{item.content}</p>
    </div>
  );
};

export default Card;
