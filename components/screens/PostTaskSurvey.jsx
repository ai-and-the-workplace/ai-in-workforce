import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import ExternalLink from '../UI/ExternalLink';
import { ContinueButton } from '../UI/Button';

export default function PostTaskSurvey() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Post Task Survey</h1>
      <p className="body mb-6 md:mb-9">
        Fill out this survey before starting the next task.
      </p>
      <div className="mb-16">
        <ExternalLink text="Post Task Survey" link="https://www.google.com" />
      </div>
      <ContinueButton
        onClick={() => {
          if (progressContext.progress.tasksCompleted === 5) {
            progressContext.changeScreen('Conclusion');
          } else {
            progressContext.changeScreen('Task Selection');
          }
        }}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
