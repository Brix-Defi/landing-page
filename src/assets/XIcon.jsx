import PropTypes from "prop-types";

const XIcon = ({ fill = "#fff", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    fill={fill}
    {...props}
  >
    <switch>
      <g>
        <path d="M42.5 31.2 66 6h-6L39.8 27.6 24 6H4l24.6 33.6L4 66h6l21.3-22.8L48 66h20L42.5 31.2zM12.9 10h8L59 62h-8L12.9 10z" />
      </g>
    </switch>
  </svg>
);
export default XIcon;

XIcon.propTypes = {
  fill: PropTypes.string,
};
