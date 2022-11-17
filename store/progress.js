import { createContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState({ screen: 'landing' });

  function changescreen(newscreen) {
    setProgress({ ...progress, screen: newscreen });
  }

  return (
    <ProgressContext.Provider value={{ progress, changescreen }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
