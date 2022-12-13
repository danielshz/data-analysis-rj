import { Dispatch, SetStateAction } from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { 
  SelectTrigger,
  SelectIcon,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectScrollUpButton,
  SelectScrollDownButton
} from './styles';

export interface Option {
  label: string;
  value: string;
}

interface SelectSingle {
  options: Option[];
  value: Option;
  setValue: Dispatch<SetStateAction<Option>>;
}

export default function SelectSingle({ options, value, setValue }: SelectSingle){
  return (
    <Select.Root defaultValue={value.value} value={value.value} 
      onValueChange={(value) => setValue({ value, label: options.find(option => option.value === value).label })}
    >
      <SelectTrigger>
        <Select.Value />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <Select.Portal>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport>
            {options.map(({ value, label }) => (
              <SelectItem key={label} value={value}>
                <Select.ItemText>
                  {label}
                </Select.ItemText>
              </SelectItem>
            ))}
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  );
}