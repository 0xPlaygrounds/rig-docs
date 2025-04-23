import '../styles.css';
import { Inter, Fira_Code } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className} ${firaCode.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
