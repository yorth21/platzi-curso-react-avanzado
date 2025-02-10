import React from "react";

interface ChildComponentProps {
  data: string[];
}

const ChildComponent: React.FC<ChildComponentProps> = ({ data }) => {
  return (
    data.map((item, index) => {
      return <li key={index}>{item}</li>
    })
  );
};

export default ChildComponent;
