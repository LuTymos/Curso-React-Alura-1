import React from "react";
import "./Input.css";

interface InputProps {
  type: string;
  label: string;
  placeholder?: string;
  Id: string;
  required?: boolean;
  valueInput: string;
  setValueInput: (valor: string) => void;
}

function Input({
  type,
  label,
  placeholder,
  Id,
  required = false,
  valueInput,
  setValueInput,
}: InputProps) {
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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
