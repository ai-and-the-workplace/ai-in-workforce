import { useContext, useState } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';
import Paragraphs from '../UI/Paragraphs';
import CheckBox from '../UI/CheckBox';

const TEXT = ['Have you ever interacted with ChatGPT?'];

export default function ChatGPT() {
  const [hasInteracted, setHasInteracted] = useState(false);

  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">ChatGPT</h1>
      <Paragraphs paragraphs={TEXT} mb="mb-4 md:mb-6" />
      <div className="mb-16">
        <CheckBox
          id="yes"
          label="Yes"
          value={hasInteracted}
          checked={hasInteracted}
          valueChangeHandler={() => setHasInteracted(true)}
          classes="mb-4 md:mb-6"
        />
        <CheckBox
          id="no"
          label="No"
          value={!hasInteracted}
          checked={!hasInteracted}
          valueChangeHandler={() => setHasInteracted(false)}
        />
      </div>
      <ContinueButton
        onClick={() => {
          if (hasInteracted) {
            progressContext.changeScreen('Not Eligible');
          } else {
            progressContext.changeScreen('Consent');
          }
        }}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
