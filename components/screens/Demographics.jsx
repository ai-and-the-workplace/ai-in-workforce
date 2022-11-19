import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import ExternalLink from '../UI/ExternalLink';
import { ContinueButton } from '../UI/Button';

export default function Demographics() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Demographic Questions</h1>
      <p className="body mb-6 md:mb-9">
        Let&apos;s start off with some basic demographic questions about you:
      </p>
      <div className="mb-16">
        <ExternalLink
          text="Demographics Survey"
          link="https://www.google.com"
        />
      </div>
      <ContinueButton onClick={() => progressContext.changeScreen('Attitudes')}>
        Continue
      </ContinueButton>
    </div>
  );
}
