import { useContext } from 'react';
import ProgressContext from '../store/progress';
import Landing from '../components/stages/Landing';

export default function Home() {
  const progressContext = useContext(ProgressContext);

  return <>{progressContext.progress.stage === 'landing' && <Landing />}</>;
}
