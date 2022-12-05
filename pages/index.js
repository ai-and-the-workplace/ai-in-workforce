import { useContext } from 'react';
import ProgressContext from '../store/progress';
import Header from '../components/UI/Header';
import Landing from '../components/screens/Landing';
import Introduction from '../components/screens/Introduction';
import AboutTheStudy from '../components/screens/AboutTheStudy';
import Consent from '../components/screens/Consent';
import Instructions from '../components/screens/Instructions';
import PreStudySurvey from '../components/screens/PreStudySurvey';
import WorkplaceTasks from '../components/screens/WorkplaceTasks';
import GPT3 from '../components/screens/GPT3';
import PostTaskSurvey from '../components/screens/PostTaskSurvey';
import PostStudyServey from '../components/screens/PostStudySurvey';
import Conclusion from '../components/screens/Conclusion';
import Modal from '../components/UI/Modal';
import { TASKS } from '../constants/constants';

export default function Home() {
  const progressContext = useContext(ProgressContext);

  if (!progressContext.progress) {
    return null;
  }

  const curScreen = progressContext.progress.screen;

  let screen = <div>Error</div>;

  if (curScreen === 'Landing') {
    screen = <Landing />;
  } else if (curScreen === 'Introduction') {
    screen = <Introduction />;
  } else if (curScreen === 'About The Study') {
    screen = <AboutTheStudy />;
  } else if (curScreen === 'Consent') {
    screen = <Consent />;
  } else if (curScreen === 'Instructions') {
    screen = <Instructions />;
  } else if (curScreen === 'Pre-Study Survey') {
    screen = <PreStudySurvey />;
  } else if (curScreen === 'Workplace Tasks') {
    screen = <WorkplaceTasks />;
  } else if (curScreen === 'Post Task Survey') {
    screen = <PostTaskSurvey />;
  } else if (curScreen === 'Post Study Survey') {
    screen = <PostStudyServey />;
  } else if (curScreen === 'Conclusion') {
    screen = <Conclusion />;
  } else if (Object.hasOwn(TASKS, curScreen)) {
    screen = <GPT3 />;
  }

  return (
    <>
      <Header />
      {screen}
      <Modal />
    </>
  );
}
