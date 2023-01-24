import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';

export default function PreStudySurvey() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Pre-Study Survey</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Let&apos;s start off with some basic demographic questions about you.
        Please wait for the survey to pop up as it takes a few seconds. Your
        participant ID is: <strong>{progressContext.progress.id}</strong>.
        Please enter it into the survey. Do not press continue until you have
        answered all the questions.
      </p>
      <div className="mb-16 max-w-full">
        <iframe
          className="h-[600px] w-full"
          src="https://www.surveymonkey.com/r/CLHZQ9T"
        />
      </div>
      <ContinueButton
        onClick={() => progressContext.changeScreen('Pre-Task Survey')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
