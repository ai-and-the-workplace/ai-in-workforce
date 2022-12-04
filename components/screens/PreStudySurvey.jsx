import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import ExternalLink from '../UI/ExternalLink';
import { ContinueButton } from '../UI/Button';

export default function PreStudySurvey() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Pre-Study Survey</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Let&apos;s start off with some basic demographic questions about you.
        Your patient ID is: <strong>{progressContext.progress.id}</strong>.
        Please enter it into the survey.
      </p>
      <div className="mb-16">
        <ExternalLink
          text="Pre-Study Survey"
          link="https://www.surveymonkey.com/r/CLHZQ9T"
        />
      </div>
      <ContinueButton
        onClick={() => progressContext.changeScreen('Content Creation')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
