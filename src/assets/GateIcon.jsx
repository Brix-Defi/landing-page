import PropTypes from "prop-types";

const GateIcon = ({ fill = "#fff", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2500 2500"
    fill={fill}
    {...props}
  >
    <path d="M1250,1937c-381,0-687-306-687-687s306-687,687-687V0C559,0,0,559,0,1250s559,1250,1250,1250    s1250-559,1250-1250l0,0h-563C1937,1631,1631,1937,1250,1937z" />
    <rect x={1250} y={566} width={687} height={687} />
  </svg>
);
export default GateIcon;

GateIcon.propTypes = {
  fill: PropTypes.string,
};
