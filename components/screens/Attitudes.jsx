import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import ExternalLink from '../UI/ExternalLink';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  'Now, we would like to know more about your attitudes towards certain workplace tasks and trends.',
  'Below are examples of some knowledge/administration tasks. For each task, please answer how confident do you feel that you would be able to perform each task satisfactorily.',
];

export default function Attitudes() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Attitudes</h1>
      <div className="mb-6 md:mb-9">
        {TEXT.map((text, i) => (
          <p className="body mb-4.5 last:mb-0 md:mb-5" key={`text-${i}`}>
            {text}
          </p>
        ))}
      </div>
      <div className="mb-16">
        <ExternalLink text="Attitudes Survey" link="https://www.google.com" />
      </div>
      <ContinueButton
        onClick={() => progressContext.changeScreen('workplace tasks')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
