import { useContext, useState, useEffect } from 'react';
import ProgressContext from '../../store/progress';

export default function Timer() {
  const progressContext = useContext(ProgressContext);

  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval);
          progressContext.completeTask(progressContext.progress.screen);
        } else {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  });

  return (
    <div className="w-[76px] rounded-xl bg-grey py-3 text-center md:w-24 md:py-4">
      <p className="text-base text-darkBlue md:text-lg">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
}
