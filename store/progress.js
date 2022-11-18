import { createContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState({ screen: 'landing' });

  function changeScreen(newscreen) {
    setProgress({ ...progress, screen: newscreen });
  }

  return (
    <ProgressContext.Provider value={{ progress, changeScreen }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
