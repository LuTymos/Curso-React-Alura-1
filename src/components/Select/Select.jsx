import "./Select.css";

function Select({ Id, label, options, required, valueInput, setValueInput }) {
  const handleValue = (e) => {
    setValueInput(e.target.value);
  };
  return (
    <div className="Select">
      <label htmlFor={Id}>{label}</label>
      <select
        onChange={(e) => {
          handleValue(e);
        }}
        required={required}
        id={Id}
      >
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
