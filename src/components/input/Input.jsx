import "./Input.css";

function Input({
  type,
  label,
  placeholder,
  Id,
  required,
  valueInput,
  setValueInput,
}) {
  const handleValue = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <div className="Input">
      <label htmlFor={Id}>{label}</label>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        id={Id}
        value={valueInput}
        onChange={(e) => {
          handleValue(e);
        }}
      />
    </div>
  );
}

export default Input;
