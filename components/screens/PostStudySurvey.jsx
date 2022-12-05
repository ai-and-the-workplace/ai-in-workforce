import { useState, useContext } from 'react';
import ProgressContext from '../../store/progress';
import ExternalLink from '../UI/ExternalLink';
import { ContinueButton } from '../UI/Button';

export default function PostStudyServey() {
  const progressContext = useContext(ProgressContext);

  const [buttonEnabled, setButtonEnabled] = useState(false);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Post Study Survey</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Thank you for participating in our study. Please fill out this exit
        survey Your participant ID is:{' '}
        <strong>{progressContext.progress.id}</strong>. Please enter it into the
        survey.
      </p>
      <div className="mb-16">
        <ExternalLink
          text="Post-Study Survey"
          link="https://www.surveymonkey.com/r/CL6JNYL"
          onClick={() => setButtonEnabled(true)}
        />
      </div>
      <ContinueButton
        onClick={() => progressContext.changeScreen('Conclusion')}
        disabled={!buttonEnabled}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
