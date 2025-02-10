import React, { useState } from "react";

function useLoading(inicialLoading: boolean = false) {
  const [isLoading, setIsLoading] = useState(inicialLoading);

  return {
    isLoading,
    setIsLoading,
  }
}

type UserProps = {
  name: string;
}

const UserComponent: React.FC<UserProps> = ({ name }) => {
  const { isLoading, setIsLoading } = useLoading(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={() => setIsLoading(true)}>Simulate loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="Yorth21" />;
};
