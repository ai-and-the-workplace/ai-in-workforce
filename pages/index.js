import { useContext } from 'react';
import ProgressContext from '../store/progress';
import Landing from '../components/screens/Landing';
import Introduction from '../components/screens/Introduction';
import Consent from '../components/screens/Consent';
import Instructions from '../components/screens/Instructions';
import Demographics from '../components/screens/Demographics';
import Attitudes from '../components/screens/Attitudes';
import WorkplaceTasks from '../components/screens/WorkplaceTasks';

export default function Home() {
  const progressContext = useContext(ProgressContext);

  return (
    <>
      {progressContext.progress.screen === 'landing' && <Landing />}
      {progressContext.progress.screen === 'introduction' && <Introduction />}
      {progressContext.progress.screen === 'consent' && <Consent />}
      {progressContext.progress.screen === 'instructions' && <Instructions />}
      {progressContext.progress.screen === 'demographics' && <Demographics />}
      {progressContext.progress.screen === 'attitudes' && <Attitudes />}
      {progressContext.progress.screen === 'workplace tasks' && (
        <WorkplaceTasks />
      )}
    </>
  );
}
