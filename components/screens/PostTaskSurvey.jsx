import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';

export default function PostTaskSurvey() {
  const progressContext = useContext(ProgressContext);

  let surveyLink;

  if (progressContext.progress.tasksCompleted === 1) {
    surveyLink = 'https://www.surveymonkey.com/r/RFVYSDF';
  } else if (progressContext.progress.tasksCompleted === 2) {
    surveyLink = 'https://www.surveymonkey.com/r/Q8Q6G8V';
  } else if (progressContext.progress.tasksCompleted === 3) {
    surveyLink = 'https://www.surveymonkey.com/r/Q8TYNHJ';
  } else {
    surveyLink = 'https://www.surveymonkey.com/r/CL68FB2';
  }

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Post Task Survey</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Fill out this survey before starting the next task. Please wait for the
        survey to pop up as it takes a few seconds. Your participant ID is{' '}
        <strong>{progressContext.progress.id}</strong>. Please enter it into the
        survey. Press continue until you finished answered all the questions.
      </p>
      <div className="mb-16 max-w-full">
        <iframe className="h-[600px] w-full" src={surveyLink} />
      </div>
      <ContinueButton
        onClick={() => {
          if (progressContext.tasksCompleted < 4) { progressContext.changeScreen('Pre-Task Survey'); } else {progressContext.changeScreen('Post Study Survey')}
        }}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
