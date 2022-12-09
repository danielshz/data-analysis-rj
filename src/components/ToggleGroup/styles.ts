import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { styled } from '../../styles/themes';

export const StyledToggleGroup = styled(ToggleGroup.Root, {
  display: 'flex',
  backgroundColor: '$white1',
  borderRadius: '10px',
  boxShadow: '0 2px 10px hsl(0 0% 9.0%)',
  width: 'fit-content',
});

export const StyledToggleGroupItem = styled(ToggleGroup.Item, {
  all: 'unset',
  backgroundColor: '$white0',
  height: '2rem',
  width: 'fit-content',
  fontSize: '1.2rem',
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 0.8rem',
  cursor: 'pointer',

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
    backgroundColor: '$white1'
  },
  "&[data-state='on']": {
    backgroundColor: '$white2',
    fontWeight: '500'
  },
});