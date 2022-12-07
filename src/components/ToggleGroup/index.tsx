import { StyledToggleGroup, StyledToggleGroupItem } from './styles';

interface ToggleGroupProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: { value: string, label: string }[];
}

export default function ToggleGroup({ value, setValue, options }: ToggleGroupProps) {
  return (
    <StyledToggleGroup
      type="single"
      defaultValue="center"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      {options.map(({ value, label }) => (
        <StyledToggleGroupItem key={label} value={value}>
          <p>{label}</p>
        </StyledToggleGroupItem>
      ))} 
    </StyledToggleGroup>
  );
}