import { createContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    screen: 'landing',
    tasksCompleted: {
      'Summarizing Text': false,
      'Social Media Content Generation': false,
      Copywriting: false,
      'Captioning Content': false,
      'Creating Text From Bullet Points': false,
    },
    numCompleted: 0,
  });

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
