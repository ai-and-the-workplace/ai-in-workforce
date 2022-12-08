import { useState, useContext } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';

export default function PreStudySurvey() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Pre-Study Survey</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Let&apos;s start off with some basic demographic questions about you.
        Your participant ID is: <strong>{progressContext.progress.id}</strong>.
        Please enter it into the survey.
      </p>
      <div className="mb-16 max-w-full">
        <iframe
          className="h-[400px] w-full"
          src="https://www.surveymonkey.com/r/CLHZQ9T"
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
