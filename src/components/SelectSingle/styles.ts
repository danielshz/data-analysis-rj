import * as Select from '@radix-ui/react-select';
import { styled } from '../../styles/themes';

export const SelectTrigger = styled(Select.Trigger, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '0 1rem',
  fontSize: '1.2rem',
  lineHeight: '1',
  height: '3rem',
  gap: '1rem',
  backgroundColor: '$white0',
  color: '$black1',
  border: '0',
  boxShadow: '0 2px 10px hsl(0 0% 9.0%)',

  button: {
    all: 'unset'
  },
  svg: {
    width: '1.5rem',
    height: '1.5rem',
  },

  '&:hover': {
    backgroundColor: '$white1',
  },
  '&[data-placeholder]': {
    color: '$black1',
  },
});

export const SelectIcon = styled(Select.Icon, {
  color:' $black1'
});

export const SelectContent = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: '$white0',
  borderRadius: '6px',
  zIndex: '2',
});

export const SelectViewport = styled(Select.Viewport, {
  padding: '0.5rem',
});

export const SelectItem = styled(Select.Item, {
  fontSize: '1.2rem',
  lineHeight: '1',
  color: '$black1',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  height: '2rem',
  padding: '0 3rem 0 2rem',
  position: 'relative',
  userSelect: 'none',
  
  '&[data-disabled]': {
    color: '$white2',
    pointerEvents: 'none',
  },
  
  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$white2',
    color: '$black1',
  }
});

export const SelectScrollUpButton = styled(Select.ScrollUpButton, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2rem',
  backgroundColor: 'white',
  color: '$black1',
  cursor: 'default',
});

export const SelectScrollDownButton = styled(Select.ScrollDownButton, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2rem',
  backgroundColor: 'white',
  color: '$black1',
  cursor: 'default',
});
