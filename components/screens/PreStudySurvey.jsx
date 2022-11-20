import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import ExternalLink from '../UI/ExternalLink';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  "Let's start off with some basic demographic questions about you:",
];

export default function PreStudySurvey() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Pre-Study Survey</h1>
      <Paragraphs paragraphs={TEXT} mb="mb-6 md:mb-9" />
      <div className="mb-16">
        <ExternalLink text="Pre-Study Survey" link="https://www.google.com" />
      </div>
      <ContinueButton
        onClick={() => progressContext.changeScreen('Workplace Tasks')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
