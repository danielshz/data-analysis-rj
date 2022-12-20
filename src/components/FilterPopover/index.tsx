import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';

import { 
  StyledPopoverRoot, 
  StyledPopoverContent, 
  StyledPopoverArrow, 
  StyledPopoverClose, 
  Input, Label, Fieldset, IconButton, ApplyButton, Text 
} from './styles';

export interface FiltersType {
  max?: number;
  min?: number;
  begin?: Date | string;
  end?: Date | string;
};

export type FiltersPage = 'QUANT' | 'DATE';

interface FilterPopoverProps {
  filters: FiltersType | null;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
  page: FiltersPage;
}

export default function FilterPopover({ filters, setFilters, page }: FilterPopoverProps) {
  const [max, setMax] = useState(filters != null ? filters.max : 100000);
  const [min, setMin] = useState(filters != null ? filters.min : 0);
  
  const [begin, setBegin] = useState(filters != null ? filters.begin : '2020-01-01');
  const [end, setEnd] = useState(filters != null ? filters.end : '2020-12-31');

  return (
    <StyledPopoverRoot modal>
      <Popover.Trigger asChild>
        <IconButton>
          <MixerHorizontalIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Portal>
        <StyledPopoverContent sideOffset={5}>
          <Text>
            Filtros
          </Text>
          {page == 'QUANT' && (
            <>
              <Fieldset>
                <Label htmlFor="max">
                  Máximo
                </Label>
                <Input id="max" type="number" value={max} onChange={(e) => setMax(e.target.value as unknown as number)} defaultValue={1000} />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="min">
                  Mínimo
                </Label>
                <Input id="min" type="number" value={min} onChange={(e) => setMin(e.target.value as unknown as number)} defaultValue={0} />
              </Fieldset>
            </>
          )}

          {page == 'DATE' && (
            <>
              <Fieldset>
                <Label htmlFor="begin">
                  Início
                </Label>
                <Input id="begin" type="date" value={begin as string} onChange={(e) => setBegin(e.target.value as unknown as Date)} />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="end">
                  Fim
                </Label>
                <Input id="end" type="date" value={end as string} onChange={(e) => setEnd(e.target.value as unknown as Date)} />
              </Fieldset>
            </>
          )}
          <ApplyButton onClick={() => setFilters(page === 'QUANT' ? { max, min } : { begin, end })}>
            <Text>
              Aplicar filtros
            </Text>
          </ApplyButton>
          <StyledPopoverClose>
            <Cross2Icon />
          </StyledPopoverClose>
          <StyledPopoverArrow />
        </StyledPopoverContent>
      </Popover.Portal>
    </StyledPopoverRoot>
  );
}