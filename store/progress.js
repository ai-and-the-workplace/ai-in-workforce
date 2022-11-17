import { createContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState({ stage: 'landing' });

  function changeStage(newStage) {
    setProgress({ ...progress, stage: newStage });
  }

  return (
    <ProgressContext.Provider value={{ progress, changeStage }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
