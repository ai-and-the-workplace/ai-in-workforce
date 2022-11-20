import { createContext, useEffect, useState } from 'react';

const ProgressContext = createContext();

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function isProgress(progress) {
  return (
    progress !== undefined &&
    progress !== null &&
    Object.hasOwn(progress, 'screen')
  );
}

export const ProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setInitialProgress(), []);

  useEffect(() => {
    if (isProgress(progress)) {
      localStorage.setItem('progress', JSON.stringify(progress));
    }
  }, [progress]);

  function setInitialProgress() {
    let savedProgress = localStorage.getItem('progress');

    if (isJSON(savedProgress)) {
      savedProgress = JSON.parse(savedProgress);

      if (isProgress(savedProgress)) {
        setProgress(savedProgress);
        return;
      }
    }

    setProgress({
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
  }

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
