import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  'This study can only be performed on a computer.',
  'You will receive an unique ID number as you go through this study. Please write down this number as you will need it to answer the surveys. All surveys are administered through surveymonkey. Please complete the survey before clicking continue.',
  'We will start the study by asking you to provide some general information about yourself, including your attitudes and beliefs about diverse topics. This survey should take about 5 minutes to complete.',
  'We will then ask you to go through 4 tasks using AI. You will fill out a survey before and after each task. Each of these surveys should take around 2-3 minutes to complete. Ensure that your complete two surveys per task.',
  'The tasks will be described in more detail later and your job will be to execute them to the best of your ability. Each task takes 3 minutes to complete. You will be automatically directed to the next task after the 3 minute timer is up.',
  'Finally after you completed all the tasks, you will be directed towards an exit survey. This survey should take about 5 minutes to complete.',
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
