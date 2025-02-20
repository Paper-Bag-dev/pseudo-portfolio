import React from "react";

interface Props {
  type: string;
  width?: number;
  height?: number;
}

// SVG Components
const BirdWhiteBg = ({
  width = 166,
  height = 125,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 166 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M136.871 70.5413L80.7188 124.939L65.9789 111.252L80.7188 95.8098L47.0275 112.655L65.9789 92.6512L55.8013 95.1079L34.3932 88.0888L0 49.8351L52.6427 72.647L62.1184 64.2241L55.8013 60.7146L15.7928 10.8795L63.1712 35.7971L34.0423 0L89.4926 32.2875L94.7569 40.0085L115.112 20.7061H138.626L148.452 29.8309L166 41.7632H144.943L136.871 48.4313V70.5413Z"
      fill="#BABABA"
    />
    <ellipse
      cx="133.713"
      cy="30.1822"
      rx="2.45666"
      ry="2.45666"
      fill="#EAEAF3"
    />
  </svg>
);

const BirdDarkGrayBg = ({
  width = 166,
  height = 125,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 166 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M136.871 70.5413L80.7188 124.939L65.9789 111.252L80.7188 95.8098L47.0275 112.655L65.9789 92.6512L55.8013 95.1079L34.3932 88.0888L0 49.8351L52.6427 72.647L62.1184 64.2241L55.8013 60.7146L15.7928 10.8795L63.1712 35.7971L34.0423 0L89.4926 32.2875L94.7569 40.0085L115.112 20.7061H138.626L148.452 29.8309L166 41.7632H144.943L136.871 48.4313V70.5413Z"
      fill="#6A6A6A"
    />
    <ellipse
      cx="133.713"
      cy="30.1822"
      rx="2.45666"
      ry="2.45666"
      fill="#EAEAF3"
    />
  </svg>
);

const BirdGrayBg = ({
  width = 148,
  height = 125,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 148 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M118.871 70.5413L62.7188 124.939L47.9789 111.252L62.7188 95.8098L29.0275 112.655L47.9789 92.6512L37.8013 95.1079L16.3932 88.0888L-18 49.8351L34.6427 72.647L44.1184 64.2241L37.8013 60.7146L-2.20719 10.8795L45.1712 35.7971L16.0423 0L71.4926 32.2875L76.7569 40.0085L97.1121 20.7061H120.626L130.452 29.8309L148 41.7632H126.943L118.871 48.4313V70.5413Z"
      fill="#989898"
    />
    <ellipse
      cx="115.713"
      cy="30.1822"
      rx="2.45666"
      ry="2.45666"
      fill="#EAEAF3"
    />
  </svg>
);

const BirdBlackBg = ({
  width = 166,
  height = 125,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 166 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M136.871 70.5413L80.7188 124.939L65.9789 111.252L80.7188 95.8098L47.0275 112.655L65.9789 92.6512L55.8013 95.1079L34.3932 88.0888L0 49.8351L52.6427 72.647L62.1184 64.2241L55.8013 60.7146L15.7928 10.8795L63.1712 35.7971L34.0423 0L89.4926 32.2875L94.7569 40.0085L115.112 20.7061H138.626L148.452 29.8309L166 41.7632H144.943L136.871 48.4313V70.5413Z"
      fill="#1D1D1D"
    />
    <ellipse
      cx="133.713"
      cy="30.1822"
      rx="2.45666"
      ry="2.45666"
      fill="#EAEAF3"
    />
  </svg>
);

const BirdBrownBg = ({
  width = 168,
  height = 115,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 168 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M138.048 70.9167L82.6126 126.045L67.6946 112.552L82.2311 96.9185L48.7632 114.204L67.451 93.9532L57.3065 96.543L35.8083 89.8049L0.917071 52.0049L53.854 74.1254L63.2186 65.5792L56.856 62.1527L16.1983 12.8458L63.899 37.1407L34.3038 1.72824L90.1722 33.2868L95.5371 40.9381L115.638 21.3709L139.149 21.0629L149.095 30.0582L166.797 41.7597L145.742 42.0355L137.758 48.8087L138.048 70.9167Z"
      fill="#493327"
    />
    <ellipse
      cx="134.361"
      cy="30.6025"
      rx="2.45666"
      ry="2.45666"
      transform="rotate(-0.750396 134.361 30.6025)"
      fill="#2C2224"
    />
  </svg>
);

const BirdDarkBrownBg = ({
  width = 169,
  height = 128,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 147 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M116.254 71.74L60.8193 126.868L45.9013 113.375L60.4378 97.7417L26.97 115.027L45.6577 94.7765L35.5132 97.3662L14.0151 90.6281L-20.8762 52.8282L32.0607 74.9486L41.4253 66.4024L35.0628 62.9759L-5.59493 13.669L42.1058 37.964L12.5105 2.55148L68.3789 34.11L73.7438 41.7614L93.8445 22.1941L117.356 21.8862L127.302 30.8814L145.004 42.5829L123.949 42.8587L115.965 49.6319L116.254 71.74Z"
      fill="#332729"
    />
    <ellipse
      cx="112.568"
      cy="31.4257"
      rx="2.45666"
      ry="2.45666"
      transform="rotate(-0.750396 112.568 31.4257)"
      fill="#070606"
    />
  </svg>
);

const BirdLightBrownBg = ({
  width = 168,
  height = 105,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 168 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M137.783 47.9167L82.3482 103.045L67.4302 89.5521L81.9667 73.9185L48.4988 91.2039L67.1866 70.9532L57.0421 73.543L35.5439 66.8049L0.652666 29.0049L53.5896 51.1254L62.9542 42.5792L56.5916 39.1527L15.9339 -10.1542L63.6346 14.1407L34.0394 -21.2718L89.9078 10.2868L95.2727 17.9381L115.373 -1.62913L138.885 -1.93708L148.83 7.05818L166.533 18.7597L145.477 19.0355L137.494 25.8087L137.783 47.9167Z"
      fill="#6F4F4F"
    />
    <ellipse
      cx="134.097"
      cy="7.6025"
      rx="2.45666"
      ry="2.45666"
      transform="rotate(-0.750396 134.097 7.6025)"
      fill="#3D2C2F"
    />
  </svg>
);

const BirdLineBg = ({
  width = 168,
  height = 105,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 83 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M66.9619 34.9958L39.9006 61.2114L32.797 54.6152L39.9006 47.1734L23.6638 55.2918L32.797 45.6512L27.8922 46.8351L17.5751 43.4524L1 25.0169L26.37 36.0106L30.9366 31.9514L27.8922 30.2601L8.61099 6.24313L31.444 18.2516L17.4059 1L44.129 16.5603L46.666 20.2812L56.4757 10.9789H67.8076L72.5433 15.3763L81 21.1269H70.852L66.9619 24.3404V34.9958Z"
      stroke="white"
    />
  </svg>
);

// Use mapping to select SVG based on `type` prop
const birdComponents: Record<
  string,
  React.FC<{ width?: number; height?: number }>
> = {
  w: BirdWhiteBg,
  gr: BirdGrayBg,
  dg: BirdDarkGrayBg,
  bl: BirdBlackBg,
  br: BirdBrownBg,
  dbr: BirdDarkBrownBg,
  lbr: BirdLightBrownBg,
  ln: BirdLineBg,
};

// Main Component
const BirdPic: React.FC<Props> = ({ type, width = 166, height = 125 }) => {
  const SelectedBird = birdComponents[type] || BirdWhiteBg;
  return <SelectedBird width={width} height={height} />;
};

export default BirdPic;
