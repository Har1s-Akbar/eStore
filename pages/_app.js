import 'antd/dist/antd.css';
import '../styles/globals.css'
import { ContextProvider } from '../context/conetxt';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
