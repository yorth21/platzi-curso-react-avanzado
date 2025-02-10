import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState('');
  

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter code here. Ej: 10FF"
      />
      <p>Code: <b>{value}</b></p>
    </div>
  );
};
