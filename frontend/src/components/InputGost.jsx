import React, { useId } from "react";

export default function InputGost({ name, value }) {
  const id = useId();
  return (
    <>
      <div className="input-container">
        <div className="input-gost">{value}</div>
        <label className="label-gost" htmlFor={id}>
          {name}
        </label>
      </div>
    </>
  );
}
