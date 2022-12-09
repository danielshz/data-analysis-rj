import { keyframes } from '@stitches/react';
import * as Popover from '@radix-ui/react-popover';

import { styled } from '../../styles/themes';

const slideUpAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  }
});

const slideRightAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateX(0)',
  }
});

const slideDownAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  }
});

const slideLeftAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateX(2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateX(0)',
  }
});


export const StyledPopoverRoot = styled(Popover.Root, {
  // 'button, fieldset, input': {
  //   all: 'unset'
  // }
});

export const StyledPopoverContent = styled(Popover.Content, {
  display: 'flex', 
  flexDirection: 'column', 
  gap: 10,

  borderRadius: '4px',
  padding: '1.5rem',
  width: '20rem',
  backgroundColor: '$white0',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  "&:[data-state='open'][data-side='top']": {
    animationName: slideDownAndFade,
  },
  "&:[data-state='open'][data-side='right']": {
    animationName: slideLeftAndFade,
  },
  "&:[data-state='open'][data-side='bottom']": {
    animationName: slideUpAndFade,
  },
  "&:[data-state='open'][data-side='left']": {
    animationName: slideRightAndFade,
  },
});

export const StyledPopoverArrow = styled(Popover.Arrow, {
  fill: '$white0'
});

export const StyledPopoverClose = styled(Popover.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: '2rem',
  width: '2rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$black1',
  position: 'absolute',
  top: '5px',
  right: '5px',

  '&:hover': {
    backgroundColor: '$white1',
  },

  '&:focus': {
    backgroundColor: '$white2',
  }
});

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: '2.5rem',
  width: '2.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$black1',
  backgroundColor: '$white0',
  boxShadow: '0 2px 10px hsl(0 0% 9.0%)',

  '&:hover': {
    backgroundColor: '$white1',
  },
  '&:focus': {
    backgroundColor: '$white2',
  }
});

export const ApplyButton = styled('button', {
  all: 'unset',
  borderRadius: '5px',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$black1',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$black2',
  },

  '& > p': {
    margin: '0',
    color: '$white1',
  }
});

export const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

export const Label = styled('label', {
  all: 'unset',
  color: '$black1',
  width: '8rem',
});

export const Input = styled('input', {
  all: 'unset',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
  borderRadius: '4px',
  padding: '0 1rem',
  lineHeight: '1',
  color: '$black1',
  border: '1px solid $gray1',
  height: '2rem',
  backgroundColor: '$white1'
});

export const Text = styled('p', {
  margin: '0',
  color: '$black1',
  lineHeight: '2rem',
  fontWeight: '500',
});