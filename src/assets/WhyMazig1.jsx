import PropTypes from "prop-types";

const WhyMazig1 = ({ fill_1 = "#3eb699", fill_2 = "#364b44", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 400 400",
    }}
    viewBox="0 0 400 400"
    {...props}
  >
    <linearGradient
      id="a"
      x1={78.693}
      x2={319.944}
      y1={119.052}
      y2={281.778}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor={fill_1} />
      <stop offset={1} stopColor={fill_2} />
    </linearGradient>
    <path
      d="M326.7 200.4c0 21.2-.1 42.4 0 63.6.1 8.8-3.5 15.1-11.1 19.7-34.8 20.8-69.5 41.6-104.1 62.6-8.4 5.1-16 5.1-24.4 0-34.2-20.8-68.5-41.4-102.9-61.8-8.7-5.1-12.5-11.9-12.5-22 .2-41.5.2-83.1 0-124.6 0-9.9 3.6-16.7 12.2-21.7 34.4-20.4 68.7-41 102.9-61.8 8.5-5.1 16.3-5.2 24.9 0 34.4 20.9 68.9 41.6 103.5 62.2 8 4.8 11.7 11.3 11.6 20.6-.2 21.1-.1 42.2-.1 63.2zm-127.1-89.5c-48.3-.3-89 40-89.4 88.6-.4 50 39.1 90.4 88.6 90.6 48.8.3 90.2-40 90.5-88 .4-50.6-39.2-90.9-89.7-91.2z"
      style={{
        fill: "url(#a)",
      }}
    />
    <linearGradient
      id="b"
      x1={161.527}
      x2={237.237}
      y1={175.041}
      y2={226.108}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor={fill_1} />
      <stop offset={1} stopColor={fill_2} />
    </linearGradient>
    <path
      d="M199.4 254.4c-3.3-.3-5.9-2.6-7.9-4.5-13.9-13.6-27.6-27.4-41.3-41.2-4.9-5-5-11.3-.1-16.3 13.7-13.8 27.4-27.6 41.3-41.2 4.9-4.9 11.4-4.8 16.3.1 13.6 13.5 27.2 27.1 40.7 40.7 5.4 5.4 5.2 11.7-.2 17.1-13.3 13.3-26.5 26.7-40 39.9-3 3.1-5 5.4-8.8 5.4z"
      style={{
        fill: "url(#b)",
      }}
    />
  </svg>
);
export default WhyMazig1;

WhyMazig1.propTypes = {
  fill_1: PropTypes.string,
  fill_2: PropTypes.string,
};
