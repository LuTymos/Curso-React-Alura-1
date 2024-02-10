import "./Select.css";

interface SelectProps {
  Id: string;
  label: string;
  options: { value: string; label: string }[];
  required: boolean;
  valueInput: string;
  setValueInput: (value: string) => void;
}

function Select({
  Id,
  label,
  options,
  required,
  valueInput,
  setValueInput,
}: SelectProps) {
  const handleValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueInput(e.target.value);
  };
  return (
    <div className="Select">
      <label htmlFor={Id}>{label}</label>
      <select
        onChange={(e) => {
          handleValue(e);
        }}
        value={valueInput}
        required={required}
        id={Id}
      >
        <option value=""> Selecione uma opção</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
