import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function cardContainerClick(e) {
  e.preventDefault();
  window.location = "https://www.reactjs.org";
}
const CardContainer = () => {
  return (
    <div onClick={cardContainerClick}>
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;
