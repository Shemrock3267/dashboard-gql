const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  light: '#76B0F1',
  main: '#2065D1',
  dark: '#103996',
};

const SECONDARY = {
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
};

const INFO = {
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
};

const SUCCESS = {
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
};

const WARNING = {
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
};

const ERROR = {
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: GREY[100],
    neutral: GREY[200],
  },
};

export default palette;
