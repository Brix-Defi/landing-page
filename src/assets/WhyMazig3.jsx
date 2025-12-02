import PropTypes from "prop-types";

const WhyMazig3 = ({ fill_1 = "#3eb699", fill_2 = "#364b44", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    data-name="Layer 1"
    viewBox="0 0 450 450"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={71.13}
        x2={211.91}
        y1={263.75}
        y2={263.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor={fill_1} />
        <stop offset={1} stopColor={fill_2} />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="b"
        x1={237.53}
        x2={377.97}
        y1={263.72}
        y2={263.72}
      />
      <linearGradient
        xlinkHref="#a"
        id="c"
        x1={103.16}
        x2={179.69}
        y1={143.68}
        y2={143.68}
      />
      <linearGradient
        xlinkHref="#a"
        id="d"
        x1={269.48}
        x2={346.01}
        y1={143.68}
        y2={143.68}
      />
    </defs>
    <path
      d="M211.9 263.75v76.36c0 9-4.41 13.34-13.3 13.24-61.76-.7-115-45.93-125.18-107-1.92-11.6-1.7-23.58-2.16-35.39-.3-7.73 0-15.47-.09-23.21-.08-5.59 1.65-10.08 7-12.5s12-.93 16.3 3.11c3.52 3.35 6.9 6.92 10.81 9.75a62.26 62.26 0 0 0 82.8-8.69c3.17-3.49 6.67-5.28 11.43-5.13 7.78.23 12.37 4.55 12.38 12.32q.06 35.37 0 70.74c.02 2.16.01 4.28.01 6.4Z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="M237.57 263.92c0-25.07.06-50.14 0-75.22 0-5.92 1.23-10.95 7.21-13.5 5.67-2.42 11.92-.77 16.62 4.2 26.2 27.71 67.38 27.63 93.05-.41 4.42-4.84 11-5.52 16-3.86 5.17 1.7 7.57 6 7.51 12.84-.14 15.46.39 31-.69 46.37-2.41 34.43-17.1 63.22-42.73 86.18-23.55 21.09-51.46 31.82-83.05 32.8-9.56.3-13.91-4.1-13.91-13.8q-.03-37.8-.01-75.6Z"
      style={{
        fill: "url(#b)",
      }}
    />
    <path
      d="M103.16 143.52a38.27 38.27 0 1 1 38.1 38.42 38.09 38.09 0 0 1-38.1-38.42Z"
      style={{
        fill: "url(#c)",
      }}
    />
    <path
      d="M346 143.79a38.27 38.27 0 1 1-38.12-38.38A38.11 38.11 0 0 1 346 143.79Z"
      style={{
        fill: "url(#d)",
      }}
    />
  </svg>
);
export default WhyMazig3;

WhyMazig3.propTypes = {
  fill_1: PropTypes.string,
  fill_2: PropTypes.string,
};
