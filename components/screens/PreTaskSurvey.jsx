import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';

export default function PostTaskSurvey() {
  const progressContext = useContext(ProgressContext);

  let nextScreen;
  let surveyLink;

  if (progressContext.progress.tasksCompleted === 0) {
    nextScreen = 'Interview Questions';
    surveyLink = 'https://www.surveymonkey.com/r/VBPPD6Y';
  } else if (progressContext.progress.tasksCompleted === 1) {
    nextScreen = 'Fact Checking';
    surveyLink = 'https://www.surveymonkey.com/r/VB6HLYX';
  } else if (progressContext.progress.tasksCompleted === 2) {
    nextScreen = 'Content Creation';
    surveyLink = 'https://www.surveymonkey.com/r/TFG6SRZ';
  } else {
    nextScreen = 'Writing a Recommendation Letter';
    surveyLink = 'https://www.surveymonkey.com/r/TFGGK2T';
  }

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Pre-Task Survey</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Your participant ID is <strong>{progressContext.progress.id}</strong>.
        Please enter it into the survey. Do not press continue until you
        finished answered all the questions.
      </p>
      <div className="mb-16 max-w-full">
        <iframe className="h-[600px] w-full" src={surveyLink} />
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
