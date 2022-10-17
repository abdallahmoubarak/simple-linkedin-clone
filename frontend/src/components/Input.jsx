import React, { useId } from "react";

export default function Input({
  name,
  value,
  setValue,
  type,
  onKeyPress,
  accept,
}) {
  const id = useId();
  return (
    <>
      <div className="input-container">
        <input
          className="input"
          autoComplete="off"
          id={id}
          placeholder={name}
          value={value}
          type={type || "text"}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={onKeyPress && onKeyPress}
          accept={accept && accept}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    </>
  );
}
