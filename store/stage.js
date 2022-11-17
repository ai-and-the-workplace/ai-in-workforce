import { createContext, useState } from 'react';

const StageContext = createContext();

export const StageContextProvider = ({ children }) => {
  const [stage, setStage] = useState('landing');

  function changeStage(newStage) {
    setStage(newStage);
  }

  return (
    <StageContext.Provider value={{ stage, changeStage }}>
      {children}
    </StageContext.Provider>
  );
};

export default StageContext;
