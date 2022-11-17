import { StageContextProvider } from '../store/stage';
import Header from '../components/UI/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StageContextProvider>
      <>
        <div className="absolute inset-0 -z-50 overflow-hidden">
          <div className="absolute -top-[30%] -left-[10%] h-[600px] w-[600px] rounded-full border border-lightBlue border-opacity-10 md:-top-[30%] md:-right-[10%] md:left-auto md:h-[75vw] md:w-[75vw]" />
          <div className="absolute top-[30%] -right-[100vw] h-[600px] w-[600px] rounded-full border border-lightBlue border-opacity-10 xs:-right-[30vw] md:-left-[10%] md:top-[30%] md:h-[75vw] md:w-[75vw]" />
          <div className="absolute top-[50%] -left-[80vw] h-[600px] w-[600px] rounded-full border border-lightBlue border-opacity-10 xs:-left-[30vw] md:-right-[30%] md:top-[30%] md:left-auto md:h-[75vw] md:w-[75vw]" />
        </div>
        <Header />
        <Component {...pageProps} />
      </>
    </StageContextProvider>
  );
}

export default MyApp;
