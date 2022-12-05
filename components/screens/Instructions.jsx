import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  'We will start the study by asking you to provide some general information about yourself, including your attitudes and beliefs about diverse topics. ',
  "Since we are interested in people's behavior in work contexts, afterwards, we will ask you to go through 5 tasks that a person can be asked to perform as a knowledge or administrative worker.",
  'The tasks will be described in more detail later and your job will be to execute them to the best of your ability.',
  '<strong>You will receive an unique ID number as you go through this study. Please write down this number as you will need it to answer the surveys.</strong>',
  'Click continue to go to the next part.',
];

export default function Instructions() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Instructions</h1>
      <Paragraphs paragraphs={TEXT} mb="mb-11 md:mb-16" />
      <ContinueButton
        onClick={() => progressContext.changeScreen('Pre-Study Survey')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
