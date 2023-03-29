import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';

export default function Attitudes1() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Attitudes</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Please complete these two questions. Do not press continue until
        clicking on done in SurveyMonkey.
      </p>
      <div className="mb-16 max-w-full">
        <iframe
          className="h-[600px] w-full"
          src="https://www.surveymonkey.com/r/L792H6X"
        />
      </div>
      <ContinueButton
        onClick={() => progressContext.changeScreen('Workplace Tasks')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
