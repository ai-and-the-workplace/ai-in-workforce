import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  'In this section, we will ask you to complete 4 workplace tasks. All tasks have been selected as those a knowledge/administrative worker could be asked to do in the course of their work day.',
  'We are interested in how people would work with Artificial Intelligence (AI) on some of these tasks. As such, you will get the opportunity to work with a currently available  state-of-the-art AI tool that you can use to complete these tasks.',
  'Please note that there is no deception involved here. The outputs you receive from the AI are genuinely created by an Artificial Intelligence system. You will have 3 minutes to complete each task.',
  'Click continue to go to the next part.',
];

export default function WorkplaceTasks() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Workplace Tasks</h1>
      <Paragraphs paragraphs={TEXT} mb="mb-14" />
      <ContinueButton
        onClick={() => progressContext.changeScreen('Task Introduction')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
