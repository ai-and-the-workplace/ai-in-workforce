import { useContext, useState } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';
import ExternalLink from '../UI/ExternalLink';
import CheckBox from '../UI/CheckBox';

export default function Consent() {
  const progressContext = useContext(ProgressContext);

  const [agree, setAgree] = useState(false);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Consent</h1>
      <p className="body mb-6 md:mb-9">
        Before you continue with the study, please read and confirm that you
        agree with the consent form below.
      </p>
      <div className="mb-8 md:mb-9">
        <ExternalLink text="Consent Form" link="https://www.google.com" />
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
        disabled={agree === false}
        onClick={() => progressContext.changeScreen('Instructions')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
