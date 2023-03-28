import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TEXTS = [
  {
    title: 'Fact Checking Introduction',
    paragraphs: ['The first is using AI to help with Fact Checking.'],
  },
  {
    title: 'Interview Task Introduction',
    paragraphs: [
      'The second task is using AI to help with the Interview Process.',
    ],
  },
  {
    title: 'Content Creation Introduction',
    paragraphs: ['This task is using AI to help with content creation.'],
  },
  {
    title: 'Writing a Recommendation Letter Introduction',
    paragraphs: [
      'This task is using AI to help with writing a recommendation letter.',
    ],
  },
];

export default function TaskIntroduction() {
  const progressContext = useContext(ProgressContext);

  const taskIdx = progressContext.progress.tasksCompleted;

  let nextScreen;

  if (progressContext.progress.tasksCompleted === 0) {
    nextScreen = 'Fact Checking';
  } else if (progressContext.progress.tasksCompleted === 1) {
    nextScreen = 'Interview Questions';
  } else if (progressContext.progress.tasksCompleted === 2) {
    nextScreen = 'Content Creation';
  } else {
    nextScreen = 'Writing a Recommendation Letter';
  }

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">{TEXTS[taskIdx].title}</h1>
      <Paragraphs paragraphs={TEXTS[taskIdx].paragraphs} mb="mb-14" />
      <ContinueButton onClick={() => progressContext.changeScreen(nextScreen)}>
        Continue
      </ContinueButton>
    </div>
  );
}
