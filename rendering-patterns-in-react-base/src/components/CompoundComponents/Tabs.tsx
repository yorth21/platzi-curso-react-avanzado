import React, { ReactElement, useState } from "react";
import classes from "./CompoundComponents.module.css";

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activatedIndex, setActivatedIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActivatedIndex(index);
  }

  const tabElements = React.Children.toArray(children).filter(
    (child): child is ReactElement => React.isValidElement(child)
  );

  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((child, index) => 
          <li
            key={index}
            className={index === activatedIndex ? classes.TabActive : ""}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </li>
        )}
      </ul>
      <p className={classes.TabContent}>
        {tabElements[activatedIndex]}
      </p>
    </div>
  );
};

export default Tabs;
