import { useContext } from 'react';
import ProgressContext from '../store/progress';
import Landing from '../components/screens/Landing';
import Introduction from '../components/screens/Introduction';
import Consent from '../components/screens/Consent';
import Instructions from '../components/screens/Instructions';
import Demographics from '../components/screens/Demographics';
import Attitudes from '../components/screens/Attitudes';
import WorkplaceTasks from '../components/screens/WorkplaceTasks';
import TaskSelection from '../components/screens/TaskSelection';
import SummarizingText from '../components/screens/SummarizingText';
import Conclusion from '../components/screens/Conclusion';
import Modal from '../components/UI/Modal';

export default function Home() {
  const progressContext = useContext(ProgressContext);

  return (
    <>
      {progressContext.progress.screen === 'Landing' && <Landing />}
      {progressContext.progress.screen === 'Introduction' && <Introduction />}
      {progressContext.progress.screen === 'Consent' && <Consent />}
      {progressContext.progress.screen === 'Instructions' && <Instructions />}
      {progressContext.progress.screen === 'Demographics' && <Demographics />}
      {progressContext.progress.screen === 'Attitudes' && <Attitudes />}
      {progressContext.progress.screen === 'Workplace Tasks' && (
        <WorkplaceTasks />
      )}
      {progressContext.progress.screen === 'Task Selection' &&
        progressContext.progress.tasksCompleted < 5 && <TaskSelection />}
      {progressContext.progress.screen === 'Summarizing Text' && (
        <SummarizingText />
      )}
      {progressContext.progress.tasksCompleted === 5 && <Conclusion />}
      <Modal />
    </>
  );
}
