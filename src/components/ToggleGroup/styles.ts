import { styled } from '@stitches/react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const StyledToggleGroup = styled(ToggleGroup.Root, {
  display: 'flex',
  backgroundColor: '#F2EFE9',
  borderRadius: '10px',
  boxShadow: '0 2px 10px hsl(0 0% 9.0%)',
  width: 'fit-content',
});

export const StyledToggleGroupItem = styled(ToggleGroup.Item, {
  all: 'unset',
  backgroundColor: '#F2EFE9',
  height: '2rem',
  width: 'fit-content',
  fontSize: '1.2rem',
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 0.8rem',

  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
  },
  '&:last-child': {
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
  },
  '&:hover': {
    backgroundColor: 'hsl(252 96.9% 97.4%)'
  },
  "&[data-state='on']": {
    backgroundColor: '#E1E1E1',
    fontWeight: '500'
  },
});