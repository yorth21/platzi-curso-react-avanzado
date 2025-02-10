import React from "react";

type ChildComponentProps = {
  render: (name: string) => JSX.Element;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const name = "Yorth21"
  return (
    <div>
      {render(name)}
    </div>
  )

}

export const ParentComponent = () => {
  return (
    <ChildComponent render={(name) => <p>Hello, {name}!</p>} />
  );
};
