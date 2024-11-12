import './global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
/* import ClientSessionProvider from './components/ClientSessionProvider'; */

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tsum Records',
  description: 'Independent record label based in Berlin',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       {/*  <ClientSessionProvider> */}
          <Header />
          {children}
          <Footer />
        {/* </ClientSessionProvider> */}
      </body>
    </html>
  );
}
