import { createContext, useState } from "react";

export const ToggleContext = createContext(null);

export const ToggleProvider = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <ToggleContext.Provider
      value={{
        isToggled: isToggled,
        setIsToggled: setIsToggled,
      }}
    >
      {props.children}
    </ToggleContext.Provider>
  );
};
