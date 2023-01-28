import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TEXTS = [
  {
    title: 'Fact Checking Introduction',
    paragraphs: [
      'The second task is using AI to help with Fact Checking. After pressing continue, you will be directed to a pre-task survey to complete. Ensure you answer all questions on SurveyMonkey.',
    ],
  },
  {
    title: 'Interview Task Introduction',
    paragraphs: [
      'The first task is using AI to help with the Interview Process. After pressing continue, you will be directed to a pre-task survey to complete. Ensure you answer all questions on SurveyMonkey.',
    ],
  },
  {
    title: 'Content Creation Introduction',
    paragraphs: [
      'This task is using AI to help with content creation. After pressing continue, you will be directed to a pre-task survey to complete. Ensure you answer all questions on SurveyMonkey.',
    ],
  },
  {
    title: 'Writing a Recommendation Letter Introduction',
    paragraphs: [
      'This task is using AI to help with writing a recommendation letter. After pressing continue, you will be directed to a pre-task survey to complete. Ensure you answer all questions on SurveyMonkey.',
    ],
  },
];

export default function TaskIntroduction() {
  const progressContext = useContext(ProgressContext);

  const taskIdx = progressContext.progress.tasksCompleted;

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">{TEXTS[taskIdx].title}</h1>
      <Paragraphs paragraphs={TEXTS[taskIdx].paragraphs} mb="mb-14" />
      <ContinueButton
        onClick={() => progressContext.changeScreen('Pre-Task Survey')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
