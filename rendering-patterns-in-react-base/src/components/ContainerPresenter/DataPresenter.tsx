import React from "react";

type DataItem = {
  id: number;
  name: string;
  description: string;
  image: string;
}

type DatePresenterProps = {
  data: DataItem[];
}

export const DataPresenter: React.FC<DatePresenterProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <img src={item.image} alt={item.name} />
          <em>{item.description}</em>
        </React.Fragment>
      ))}
    </>
  );
};
