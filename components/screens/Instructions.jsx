import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  '<strong>This study can only be performed on a computer. Please read the following instructions below:</strong>',
  'You will receive <strong>an unique ID number</strong> as you go through this study. This number will be <strong>at the top</strong> of each page with a survey. All surveys are administered through surveymonkey which is embedded on the webpage. <mark>Completing the survey means clicking done in SurveyMonkey</mark> before clicking continue.',
  'The study format is as follows:',
  '<strong>1.</strong> We will start the study by asking you to provide some general information about yourself, including your attitudes and beliefs about certain technology. <strong>This survey should take about 5 minutes to complete.</strong>',
  '<strong>2.</strong> We will then ask you to go through 4 tasks using AI. You will fill out a survey before and after each task. Each of these surveys should take around 2-3 minutes to complete. <strong>Ensure that you complete two surveys per task.</strong>',
  '<strong>3.</strong> The tasks will be described in more detail later and your job will be to execute them to the best of your ability. <strong>Each task takes 3 minutes to complete.</strong> You will be automatically directed to the post-task survey after the 3 minute timer is up.',
  '<strong>4.</strong> Finally after you completed all the tasks, you will be directed towards an exit survey. <strong>This survey should take about 5 minutes to complete.</strong>',
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
