
import "@/styles/global.css";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {

  return (<>
    <ThemeProvider attribute="class" >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
    </>
  )
}
