import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (inputRef.current) {
      alert(`Product added: ${inputRef.current.value}`);
    }
  }
  
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Product name. E: Apple"
      />
      <button onClick={handleSubmit}>Add to cart</button>
    </div>
  );
};
