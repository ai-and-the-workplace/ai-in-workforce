import { useContext } from 'react';
import StageContext from '../store/stage';
import Landing from '../components/stages/Landing';

export default function Home() {
  const stageContext = useContext(StageContext);

  return <>{stageContext.stage === 'landing' && <Landing />}</>;
}
