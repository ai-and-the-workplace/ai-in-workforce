import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';

export default function PostStudyServey() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Post Study Survey</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Thank you for participating in our study. Please fill out this exit
        survey. Wait for the survey to pop up as it takes a few seconds. Your
        participant ID is: <strong>{progressContext.progress.id}</strong>.
        Please enter it into the survey. Do not press continue until you
        finished answered all the questions.
      </p>
      <div className="mb-16 max-w-full">
        <iframe
          className="h-[600px] w-full"
          src="https://www.surveymonkey.com/r/CL6JNYL"
        />
      </div>
      <ContinueButton
        onClick={() => progressContext.changeScreen('Conclusion')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
