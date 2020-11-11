import React from "react";
import PropTypes from "prop-types";

const LinkItem = ({ url, value }) => {
  return <a href={url}>{value}</a>;
};

LinkItem.propTypes = {
  url: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default LinkItem;
