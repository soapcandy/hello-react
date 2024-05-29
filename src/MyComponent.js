import React from "react";
import PropTypes from "prop-types";

const MyConponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다
      <br />
      children 값은 {children} 입니다
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다
    </div>
  );
};

MyConponent.defaultProps = {
  name: "기본 이름",
};

MyConponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyConponent;
