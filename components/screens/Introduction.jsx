import { useContext, useEffect, useState } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';
import CheckBox from '../UI/CheckBox';

const TEXT = [
  'In this study, you will be asked to provide some basic information about yourself, about your workplace experiences and attitudes, as well as perform several tasks that one may normally encounter in a work context.',
  'The study lasts around 30 minutes and you will be compensated for your time after completing the <strong>entire</strong> study.',
];

export default function Introduction() {
  const progressContext = useContext(ProgressContext);

  const [agree, setAgree] = useState(false);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Introduction</h1>
      <Paragraphs paragraphs={TEXT} mb="mb-8 md:mb-12" />
      <div className="mb-16">
        <CheckBox
          id="agreement"
          label="I am willing to commit to taking part in this study to the best of my ability."
          value={agree}
          valueChangeHandler={() => setAgree((prevAgree) => !prevAgree)}
        />
      </div>
      <ContinueButton
        onClick={() => progressContext.changeScreen('About The Study')}
        disabled={!agree}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
