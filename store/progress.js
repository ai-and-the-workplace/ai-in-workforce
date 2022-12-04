import { createContext, useEffect, useState } from 'react';
import { TASKS } from '../constants/constants';
import { db } from '../utils/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

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
  useEffect(() => {
    setInitialProgress();
  }, []);

  useEffect(() => {
    if (isProgress(progress)) {
      localStorage.setItem('progress', JSON.stringify(progress));
    }
  }, [progress]);

  if (progress && progress.screen === 'Conclusion' && !progress.doneStudy) {
    postData();

    setProgress((prevProgress) => ({ ...prevProgress, doneStudy: true }));
  }

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
      id: Math.floor(Math.random() * 1000000 + 1),
      screen: 'Landing',
      tasks: {
        'Content Creation': false,
        'Interview Questions': false,
        'Making Predictions': false,
        'Fact Checking': false,
        'Writing a Recommendation Letter': false,
      },
      responses: {
        'Content Creation': [],
        'Interview Questions': [],
        'Making Predictions': [],
        'Fact Checking': [],
        'Writing a Recommendation Letter': [],
      },
      tasksCompleted: 0,
      doneStudy: false,
    });
  }

  function changeScreen(newScreen) {
    setProgress((prevProgress) => ({ ...prevProgress, screen: newScreen }));
  }

  function addInteraction(input, response) {
    const screen = progress.screen;

    if (Object.hasOwn(TASKS, screen)) {
      setProgress((prevProgress) => ({
        ...prevProgress,
        responses: {
          ...prevProgress.responses,
          [screen]: [
            ...prevProgress.responses[screen],
            { input: input, response: response },
          ],
        },
      }));
    }
  }

  function completeTask(task) {
    setProgress((prevProgress) => ({
      ...progress,
      screen: 'Post Task Survey',
      tasks: { ...progress.tasks, [task]: { completed: true } },
      tasksCompleted: prevProgress.tasksCompleted + 1,
    }));
  }

  async function postData() {
    try {
      const docRef = await addDoc(collection(db, 'study-1'), {
        id: progress.id,
        responses: progress.responses,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  return (
    <ProgressContext.Provider
      value={{ progress, changeScreen, completeTask, addInteraction }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
