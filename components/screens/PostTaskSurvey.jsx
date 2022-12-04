import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import ExternalLink from '../UI/ExternalLink';
import { ContinueButton } from '../UI/Button';

export default function PostTaskSurvey() {
  const progressContext = useContext(ProgressContext);

  let nextScreen;

  if (progressContext.progress.tasksCompleted === 1) {
    nextScreen = 'Interview Questions';
  } else if (progressContext.progress.tasksCompleted === 2) {
    nextScreen = 'Making Predictions';
  } else if (progressContext.progress.tasksCompleted === 3) {
    nextScreen = 'Fact Checking';
  } else if (progressContext.progress.tasksCompleted === 4) {
    nextScreen = 'Writing a Recommendation Letter';
  } else {
    nextScreen = 'Conclusion';
  }

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Post Task Survey</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Fill out this survey before starting the next task. Your patient ID is{' '}
        <strong>{progressContext.progress.id}</strong>. Please enter it into the
        survey.
      </p>
      <div className="mb-16">
        <ExternalLink
          text="Post Task Survey"
          link="https://www.surveymonkey.com/r/CL68FB2"
        />
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
