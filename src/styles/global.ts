import { createGlobalStyle } from 'styled-components';
import { globalCss } from '@stitches/react';

// export default createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     outline: 0;
//   }

//   body {
//     background: #FFF;
//     color: #000;
//     -webkit-font-smoothing: antialiased;
//   }

//   body, input, button {
//     font-family: 'Roboto', serif;
//     font-size: 10px;
//   }

//   h1, h2, h3, h4, h5, h6, strong {
//     font-weight: 500;
//   }
  
//   button {
//     cursor: pointer;
//   }
// `;

export default globalCss({
  body: {
    margin: '0',
    background: '#F2EFE9',
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
});