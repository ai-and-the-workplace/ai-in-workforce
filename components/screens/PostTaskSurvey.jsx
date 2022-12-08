import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';

export default function PostTaskSurvey() {
  const progressContext = useContext(ProgressContext);

  let nextScreen;
  let surveyLink;

  if (progressContext.progress.tasksCompleted === 1) {
    nextScreen = 'Interview Questions';
    surveyLink = 'https://www.surveymonkey.com/r/CL68FB2';
  } else if (progressContext.progress.tasksCompleted === 2) {
    nextScreen = 'Making Predictions';
    surveyLink = 'https://www.surveymonkey.com/r/RFVYSDF';
  } else if (progressContext.progress.tasksCompleted === 3) {
    nextScreen = 'Fact Checking';
    surveyLink = 'https://www.surveymonkey.com/r/RFYMDQ2';
  } else if (progressContext.progress.tasksCompleted === 4) {
    nextScreen = 'Writing a Recommendation Letter';
    surveyLink = 'https://www.surveymonkey.com/r/Q8Q6G8V';
  } else {
    nextScreen = 'Post Study Survey';
    surveyLink = 'https://www.surveymonkey.com/r/Q8TYNHJ';
  }

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Post Task Survey</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Fill out this survey before starting the next task. Your participant ID
        is <strong>{progressContext.progress.id}</strong>. Please enter it into
        the survey.
      </p>
      <div className="mb-16 max-w-full">
        <iframe className="h-[400px] w-full" src={surveyLink} />
      </div>
      <ContinueButton
        onClick={() => {
          progressContext.changeScreen(nextScreen);
        }}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
