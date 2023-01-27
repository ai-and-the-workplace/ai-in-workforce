import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';

export default function PostTaskSurvey() {
  const progressContext = useContext(ProgressContext);

  let surveyLink;

  if (progressContext.progress.tasksCompleted === 1) {
    surveyLink = 'https://www.surveymonkey.com/r/7V9WVCY';
  } else if (progressContext.progress.tasksCompleted === 2) {
    surveyLink = 'https://www.surveymonkey.com/r/T5FGFNX';
  } else if (progressContext.progress.tasksCompleted === 3) {
    surveyLink = 'https://www.surveymonkey.com/r/T5BBFKL';
  } else {
    surveyLink = 'https://www.surveymonkey.com/r/T5BS3T2';
  }

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Post Task Survey</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Fill out this survey before starting the next task. Please wait for the
        survey to pop up as it takes a few seconds. Your participant ID is{' '}
        <strong>{progressContext.progress.id}</strong>. Please enter it into the
        survey. Do not press continue until you have answered all the questions.
      </p>
      <div className="mb-16 max-w-full">
        <iframe className="h-[600px] w-full" src={surveyLink} />
      </div>
      <ContinueButton
        onClick={() => {
          if (progressContext.progress.tasksCompleted < 4) {
            progressContext.changeScreen('Task Introduction');
          } else {
            progressContext.changeScreen('Post Study Survey');
          }
        }}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
