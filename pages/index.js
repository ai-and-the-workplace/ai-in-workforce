import { useContext } from 'react';
import ProgressContext from '../store/progress';
import Landing from '../components/screens/Landing';
import Introduction from '../components/screens/Introduction';

export default function Home() {
  const progressContext = useContext(ProgressContext);

  return (
    <>
      {progressContext.progress.screen === 'landing' && <Landing />}
      {progressContext.progress.screen === 'introduction' && <Introduction />}
    </>
  );
}
