import PropTypes from "prop-types";

const CryptoComIcon = ({ fill = "#fff", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2500 2500"
    fill={fill}
    {...props}
  >
    <path d="M1677.5,2011.7h-154.1L1339,1842.4v-86.8l191-182.3v-288.6l249.6-162.8l284.3,214.8L1677.5,2011.7 L1677.5,2011.7z M1039.5,1556l28.2-271.3l-93.3-243.1h551.2l-91.2,243.1l26.1,271.3h-212.7H1039.5L1039.5,1556z M1165.4,1842.4 l-184.5,171.4H824.6l-388.5-677.1L722.6,1124l251.7,160.6v288.6l191,182.3L1165.4,1842.4L1165.4,1842.4z M822.5,540.4h852.9 l102,434H722.7L822.5,540.4L822.5,540.4z M1250,0L167.1,625v1250L1250,2500l1082.9-625V625L1250,0L1250,0z" />
  </svg>
);
export default CryptoComIcon;

CryptoComIcon.propTypes = {
  fill: PropTypes.string,
};
