import { useContext, useState } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import ExternalLink from '../UI/ExternalLink';
import CheckBox from '../UI/CheckBox';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  'Before you continue with the study, please read and confirm that you agree with the consent form below. The consent form will open in a new tab. After reading through it, please navigate back to the experiment and click continue to give electronic consent.',
];

export default function Consent() {
  const progressContext = useContext(ProgressContext);

  const [agree, setAgree] = useState(false);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Consent</h1>
      <Paragraphs paragraphs={TEXT} mb="mb-6 md:mb-9" />
      <div className="mb-8 md:mb-12">
        <ExternalLink
          text="Consent Form"
          link="https://drive.google.com/file/d/1jB3CsK8gBM9LEcu4UhZShVOTMkb6tg1P/view?usp=sharing"
        />
      </div>
      <div className="mb-16">
        <CheckBox
          id="agreement"
          label="I agree to participate in the study."
          value={agree}
          valueChangeHandler={() => setAgree((prevAgree) => !prevAgree)}
        />
      </div>
      <ContinueButton
        disabled={!agree}
        onClick={() => progressContext.changeScreen('Instructions')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
