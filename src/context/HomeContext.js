import { createContext, useContext, useState } from "react";

const homeContext = createContext();

export const useHomeContext = () => useContext(homeContext);
export const HomeProvider = ({ children }) => {
  const [serviceId, setServiceId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <homeContext.Provider value={{ serviceId, setServiceId,isModalOpen, setIsModalOpen }}>
      {children}
    </homeContext.Provider>
  );
};
