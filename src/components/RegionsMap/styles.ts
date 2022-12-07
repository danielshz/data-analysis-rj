// import styled from 'styled-components';
import { styled } from '@stitches/react';

// export const Container = styled.div`
//   position: relative;
//   font-size: 1rem;

//   .leaflet-container {
//     height: 100%;
//     width: 100%;

//     z-index: 1;
//   }
// `;

export const Container = styled('div', {
  position: 'relative',
  fontSize: '1rem',
  width: '100%',
  minWidth: '44rem',
  minHeight: '44rem',
  borderRadius: '10px',

  '> div': {
    borderRadius: '10px',
  }
});

// export const Captions = styled.div`
//   position: absolute;
//   right: 10px;
//   top: 10px;
//   z-index: 100;

//   background-color: #F2EFE9;

//   display: flex;
//   flex-direction: column;

//   padding: 1rem 1.2rem;
//   border-radius: 10px;
// `;

export const Captions = styled('div', {
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  zIndex: '100',

  backgroundColor: '#F2EFE9',

  display: 'flex',
  flexDirection: 'column',

  padding: '1rem 1.2rem',
  borderRadius: '10px',
  boxShadow: '0 2px 10px hsl(0 0% 9.0%)',
});

// export const CaptionTitle = styled.div`
//   margin-bottom: 0.8rem;
//   font-size: 0.8rem;
//   text-align: center;
// `;

export const CaptionTitle = styled('div', {
  marginBottom: '1rem',
  fontSize: '1.2rem',
  textAlign: 'center'
});

// export const CaptionList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// 	list-style: none;
// `;

export const CaptionList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  listStyle: 'none'
});

// export const CaptionItem = styled.li`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   font-size: 0.6rem;
// `;

export const CaptionItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  fontSize: '1rem',
});

// export const CaptionColor = styled.span`
//   width: 0.8rem;
//   height: 0.8rem;

//   background-color: ${props => props.color || "#EA5666"};
//   border-radius: 5px;
// `;

export const CaptionColor = styled('span', {
  width: '0.8rem',
  height: '0.8rem',
  borderRadius: '5px',
  backgroundColor: '#EA5666',

  // variants: {
  //   color: {
  //     violet: { backgroundColor: 'blueviolet' },
  //     gray: { backgroundColor: 'gainsboro' },
  //   },
  // },
});

// export const HideButton = styled.button`
//   background: none;
//   border: none;

//   position: absolute;
//   right: 0.8rem;

//   svg {
//     width: 0.8rem;
//     height: 0.8rem;
//   }
// `;

export const HideButton = styled('button', {
  background: 'none',
  border: 'none',

  position: 'absolute',
  right: '0.8rem',

  svg: {
    width: '1.2rem',
    height: '1.2rem',
  }
});

// export const ShowButton = styled.button`
//   background: none;
//   border: none;

//   position: absolute;
//   right: 10px;
//   top: 10px;
//   z-index: 100;

//   svg {
//     width: 3rem;
//     height: 3rem;
//   }
// `;

export const ShowButton = styled('button', {
  background: 'none',
  border: 'none',

  position: 'absolute',
  right: '1rem',
  top: '1rem',
  zIndex: '100',

  svg: {
    width: '3rem',
    height: '3rem',
  }
});