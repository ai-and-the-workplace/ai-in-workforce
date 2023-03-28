import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TITLES = [
  'Fact Checking Complete',
  'Interview Task Complete',
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
        paragraphs={['Thank you for completing this task.']}
        mb="mb-14"
      />
      <ContinueButton
        onClick={() => {
          if (progressContext.progress.tasksCompleted < 4) {
            progressContext.changeScreen('Task Introduction');
          } else {
            progressContext.changeScreen('Post Study Survey');
          }
        }}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
