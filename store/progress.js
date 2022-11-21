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

  if (progress && progress.screen === 'Conclusion' && !progress.doneStudy) {
    console.log(progress);
    console.log('post!');

    postData();

    setProgress({ ...progress, doneStudy: true });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setInitialProgress();
  }, []);

  useEffect(() => {
    if (isProgress(progress)) {
      localStorage.setItem('progress', JSON.stringify(progress));
    }
  }, [progress]);

  async function postData() {
    try {
      const docRef = await addDoc(
        collection(db, 'study-1'),
        progress.responses
      );
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
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
      screen: 'Landing',
      tasks: {
        'Summarizing Text': false,
        'Social Media Content Generator': false,
        Copywriting: false,
        'Captioning Content': false,
        'Creating Text From Bullet Points': false,
      },
      responses: {
        'Summarizing Text': [],
        'Social Media Content Generator': [],
        Copywriting: [],
        'Captioning Content': [],
        'Creating Text From Bullet Points': [],
      },
      tasksCompleted: 0,
      doneStudy: false,
    });
  }

  function changeScreen(newScreen) {
    setProgress({ ...progress, screen: newScreen });
  }

  function completeTask(task) {
    setProgress((prevProgress) => ({
      ...progress,
      screen: 'Post Task Survey',
      tasks: { ...progress.tasks, [task]: { completed: true } },
      tasksCompleted: prevProgress.tasksCompleted + 1,
    }));
  }

  function addInteraction(input, response) {
    const screen = progress.screen;

    if (!Object.hasOwn(TASKS, screen)) {
      return;
    }

    setProgress({
      ...progress,
      responses: {
        ...progress.responses,
        [screen]: [
          ...progress.responses[screen],
          { input: input, response: response },
        ],
      },
    });
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
