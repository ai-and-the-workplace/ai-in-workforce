import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  'In this section, we will ask you to complete X workplace tasks. All tasks have been selected as something a knowledge/administrative worker can reasonably ask to do in the course of their work day.',
  'Crucially, we are interested in how people would work with a genuine Artificial Intelligence (AI) on some of these tasks. As such, you will get the opportunity to work with a currently developed state-of-the-art AI that can help you go through these tasks.',
  'Please note that there is no deception involved here. The outputs you receive from the AI are genuinely created by an Artificial Intelligence system. You will have 4 minutes to complete each task. Each task will automatically appear after the 4 minutes allotted for each task.',
];

export default function WorkplaceTasks() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Workplace Tasks</h1>
      <Paragraphs paragraphs={TEXT} mb="mb-14" />
      <ContinueButton
        onClick={() => progressContext.changeScreen('Task Selection')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
