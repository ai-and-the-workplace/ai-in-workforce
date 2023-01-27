import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TITLES = [
  'Interview Task Complete',
  'Fact Checking Complete',
  'Content Creation Complete',
  'Writing a Recommendation Letter Complete',
];

export default function TaskConclusion() {
  const progressContext = useContext(ProgressContext);

  const taskIdx = progressContext.progress.tasksCompleted;

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">{TITLES[taskIdx - 1]}</h1>
      <Paragraphs
        paragraphs={[
          'Thank you for completing this task. Please press continue to be directed to the post-task survey. Ensure you answer all questions on SurveyMonkey.',
        ]}
        mb="mb-14"
      />
      <ContinueButton
        onClick={() => progressContext.changeScreen('Post Task Survey')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
