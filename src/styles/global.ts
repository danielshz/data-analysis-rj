import { globalCss } from '@stitches/react';

export default globalCss({
  body: {
    margin: '0',
    backgroundColor: '#E8E7EE',
    color: '#11181C',
    webkitFontSmoothing: 'antialiased',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    outline: 0,
  },
  ':root': {
    fontSize: '8px',

    '@media (min-width: 560px)': {
      fontSize: '10px'
    },

    '@media (min-width: 1120px)': {
      fontSize: '12px'
    },

    '@media (min-width: 1400px)': {
      fontSize: '14px'
    }
  },
  button: {
    cursor: 'pointer',
  },
  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: 500,
  },
  'body, input, button': {
    fontSize: '1rem',
    fontFamily: "'Roboto', serif",
  },

  '.leaflet-container': {
    width: '100%',
    height: '100%',
    zIndex: '1'
  },
  '.leaflet-popup-content-wrapper': {
    textAlign: 'center'
  },
  '.react-select__control': {
    border: 'none !important',
    boxShadow: 'rgb(23 23 23) 0px 2px 10px !important',
    maxWidth: '40rem',
    minWidth: '20rem',
    '&:focus': {
      border: 'none !important',
      boxShadow: 'none !important'
    },

    svg: {
      fill: '#48455F'
    }
  }
});