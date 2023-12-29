import { Inter } from 'next/font/google'
import './globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Database',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
        </body>
    </html>
  )
}
