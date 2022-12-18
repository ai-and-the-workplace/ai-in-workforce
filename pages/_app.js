import { ProgressContextProvider } from '../store/progress';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ProgressContextProvider>
      <div className="pb-16 md:pb-24">
        <Component {...pageProps} />
      </div>
    </ProgressContextProvider>
  );
}

export default MyApp;
