import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";
import { classNames } from "../../utils";

import greenCheckIcon from "./green_check.svg";
import negativeIcon from "./negative.svg";
import negativeCircleIcon from "./negative_circle.svg";
import pendingIcon from "./waiting.svg";
import timeYellowIcon from "./time_yellow.svg";
import timeBlackIcon from "./time_black.svg";

const ICONS_MAP = {
  greenCheck: greenCheckIcon,
  grayNegative: negativeIcon,
  orangeNegativeCircled: negativeCircleIcon,
  bluePending: pendingIcon,
  yellowTime: timeYellowIcon,
  blackTime: timeBlackIcon
};

const getIcon = (type) => ICONS_MAP[type];

// TODO: replace icons with SVG sprite file ones when we have them
const StatusTag = ({ type, text }) => {
  return (
    <span className={classNames(styles.statusTagWrapper, styles[type])}>
      <img src={getIcon(type)} alt={type} />
      <span>{text || type}</span>
    </span>
  );
};

StatusTag.propTypes = {
  type: PropTypes.oneOf(Object.keys(ICONS_MAP)),
  text: PropTypes.string
};

StatusTag.defaultProps = {
  type: "grayNegative"
};

export default StatusTag;
