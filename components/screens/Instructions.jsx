import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  'We will start the study by asking you to provide some general information about yourself, including your attitudes and beliefs about diverse topics.',
  'Since we are interested in how people conduct basic work tasks, afterwards, we will ask you to go through X tasks that a person can be tasked with as a knowledge or administrative worker.',
  'The tasks will be described in more detail later and your job will be to do them to the best of your ability. Your output on these tasks will not be evaluated nor will it have an impact on your participation payment.',
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
