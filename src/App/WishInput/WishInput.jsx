import React, { useState } from "react";
import PropTypes from "prop-types";

const WishInput = ({ onNewWish }) => {
  const [newWishText, setNewWishText] = useState("");
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">Nueva Tarea</legend>
      <input
        className="wish-input_field"
        placeholder="Introducir Tarea Nueva"
        value={newWishText}
        onChange={(e) => setNewWishText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter" && newWishText.length) {
            onNewWish({ text: newWishText, done: false });
            setNewWishText("");
          }
        }}
      />
    </fieldset>
  );
};
WishInput.proTypes = {
  onNewWish: PropTypes.func
};

WishInput.propTypes = {
  onNewWish: () => {}
};

export default WishInput;
