import { useContext } from 'react';
import Head from 'next/head';
import ProgressContext from '../store/progress';
import Header from '../components/UI/Header';
import Landing from '../components/screens/Landing';
import Introduction from '../components/screens/Introduction';
import Prolific from '../components/screens/Prolific';
import ChatGPT from '../components/screens/ChatGPT';
import NotEligible from '../components/screens/NotEligible';
import Consent from '../components/screens/Consent';
import AboutTheStudy from '../components/screens/AboutTheStudy';
import Instructions from '../components/screens/Instructions';
import PreStudySurvey from '../components/screens/PreStudySurvey';
import WorkplaceTasks from '../components/screens/WorkplaceTasks';
import TaskIntroduction from '../components/screens/TaskIntroduction';
import GPT3 from '../components/screens/GPT3';
import TaskConclusion from '../components/screens/TaskConclusion';
import PreTaskSurvey from '../components/screens/PreTaskSurvey';
import PostTaskSurvey from '../components/screens/PostTaskSurvey';
import PostStudyServey from '../components/screens/PostStudySurvey';
import Conclusion from '../components/screens/Conclusion';
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
  } else if (curScreen === 'ChatGPT') {
    screen = <ChatGPT />;
  } else if (curScreen === 'Not Eligible') {
    screen = <NotEligible />;
  } else if (curScreen === 'Consent') {
    screen = <Consent />;
  } else if (curScreen === 'Prolific') {
    screen = <Prolific />;
  } else if (curScreen === 'Instructions') {
    screen = <Instructions />;
  } else if (curScreen === 'Pre-Study Survey') {
    window.scrollTo(0, 0);
    screen = <PreStudySurvey />;
  } else if (curScreen === 'Workplace Tasks') {
    screen = <WorkplaceTasks />;
  } else if (curScreen === 'Task Introduction') {
    screen = <TaskIntroduction />;
  } else if (curScreen === 'Pre-Task Survey') {
    screen = <PreTaskSurvey />;
  } else if (curScreen === 'Task Conclusion') {
    screen = <TaskConclusion />;
  } else if (curScreen === 'Post Task Survey') {
    window.scrollTo(0, 0);
    screen = <PostTaskSurvey />;
  } else if (curScreen === 'Post Study Survey') {
    window.scrollTo(0, 0);
    screen = <PostStudyServey />;
  } else if (curScreen === 'Conclusion') {
    screen = <Conclusion />;
  } else if (Object.hasOwn(TASKS, curScreen)) {
    window.scrollTo(0, 0);
    screen = <GPT3 />;
  }

  return (
    <>
      <Head>
        <title>AI in Workforce Study</title>
        <link rel="icon" type="image/x-icon" href="/icons/favicon.png" />
      </Head>
      <Header />
      {screen}
    </>
  );
}
