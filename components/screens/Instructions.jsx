import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  'This study can only be performed on a computer.',
  'You will receive an unique ID number as you go through this study. Please write down this number as you will need it to answer the surveys. All surveys are administered through SurveyMonkey and will open in a new tab. Please complete the survey and after clicking done at the end, close the window and return back to the study.',
  'We will start the study by asking you to provide some general information about yourself, including your attitudes and beliefs about diverse topics. This survey should take about 6-7 minutes to complete.',
  "Since we are interested in people's behavior in work contexts, afterwards, we will ask you to go through 5 tasks that a person can be asked to perform as a knowledge or administrative worker.",
  'The tasks will be described in more detail later and your job will be to execute them to the best of your ability. Each task takes 4 minutes to complete. You will be automatically directed to the next task after the 4 minute timer is up.',
  'After each task, you will be directed to a post-task survey. Ensure that you complete 5 post-task surveys by the end of the study. Each of these surveys take about 2 minutes to complete.',
  'Finally after you completed all the tasks, you will be directed towards an exit survey. This survey should take about 5 minutes to complete.',
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
