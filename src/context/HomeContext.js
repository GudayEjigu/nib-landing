import { createContext, useContext, useState } from "react";

const homeContext = createContext();

export const useHomeContext = () => useContext(homeContext);
export const HomeProvider = ({ children }) => {
  const [serviceId, setServiceId] = useState(null);
  return (
    <homeContext.Provider value={{ serviceId, setServiceId }}>
      {children}
    </homeContext.Provider>
  );
};
