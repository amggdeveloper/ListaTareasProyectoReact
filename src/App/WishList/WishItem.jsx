import React from "react";
import PropTypes from "prop-types";

const WishItem = ({ done, text, id, onDoneChange }) => (
  <li className="'wish-list__item,wish-list__item--done:done'">
    <input
      id={id}
      checked={done}
      onChange={(e) => onDoneChange(e.target.checked)}
      type="checkbox"
    />
    <label htmlFor={id}>{text}</label>
  </li>
);

WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func
};

WishItem.defaultProps = {
  done: false,
  text: "",
  id: "",
  onDoneChange: () => {}
};

export default WishItem;
