import { createContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    screen: 'Landing',
    tasks: {
      'Summarizing Text': false,
      'Social Media Content Generator': false,
      Copywriting: false,
      'Captioning Content': false,
      'Creating Text From Bullet Points': false,
    },
    tasksCompleted: 0,
  });

  function changeScreen(newScreen) {
    setProgress({ ...progress, screen: newScreen });
  }

  function completeTask(task) {
    setProgress((prevProgress) => ({
      screen: 'Post Task Survey',
      tasks: { ...progress.tasks, [task]: { completed: true } },
      tasksCompleted: prevProgress.tasksCompleted + 1,
    }));
  }

  return (
    <ProgressContext.Provider value={{ progress, changeScreen, completeTask }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
