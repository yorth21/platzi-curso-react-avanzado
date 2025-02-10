import React from "react";

function withLoading<T extends object> (Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props;

    return isLoading ? <p>Loading...</p> : <Component {...rest as T} />;
  }
}

type UserProps = {
  name: string;
}

const UserComponent: React.FC<UserProps> = ({ name }) => {
  return <p>Hello, {name}!</p>
}

const UserWithLoading = withLoading(UserComponent);

export const ParentComponent = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <UserWithLoading isLoading={isLoading} name="Yorth21" />
    </div>
  );
};
